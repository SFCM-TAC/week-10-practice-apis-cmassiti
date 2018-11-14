
var req = new XMLHttpRequest();
req.open('GET', 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6', true);
req.send();

req.onload = function(){

  var response = req.response;
  var parseResponse = JSON.parse(response);
  console.log(parseResponse);

  var beerListDiv = document.getElementById('breweries');

  var i;
  for (i = 0; i < parseResponse.length; i++){
    var newEl = document.createElement('li');
    var newText = document.createTextNode(parseResponse[i].name);
    newEl.appendChild(newText);
    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newEl);


  }
}

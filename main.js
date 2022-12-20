var header = document.querySelector('header')
var section = document.querySelector('section')
var items = []

var requestURL = './jsons/items.json'
var request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send();
request.onload = function() {
    items = request.response;
    drawCards(items,'')
}

function drawCards(jsonObj, string) {
    for (var i=0;i<=jsonObj.length;i++) {
        var itemName = jsonObj[i]['item_name']
        if (itemName.toLowerCase().includes(string.toLowerCase()) || string.length == 0) {
            var card = document.createElement('div')
            var image = document.createElement('img')
            var name = document.createElement('p')
            image.src = './images/' + jsonObj[i]['file_name'] + '.png'
            image.width = 64
            card.appendChild(image)
            name.textContent = itemName
            card.classList.add('card')
            card.appendChild(name)
            section.appendChild(card)
        }
    }
}


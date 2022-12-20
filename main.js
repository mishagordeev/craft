var header = document.querySelector('header')
var section = document.querySelector('section')
var data = []

var requestURL = './jsons/items.json'
var request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send();
request.onload = function() {
    data = request.response;
     drawMachines(data)
    //drawCards(data)
}

function drawCards(jsonObj) {
    for (var key in jsonObj['items']) {
        var itemName = jsonObj['items'][key]['item_name']
        var card = document.createElement('div')
        var image = document.createElement('img')
        var name = document.createElement('p')
        image.src = './images/' + jsonObj['items'][key]['file_name'] + '.png'
        image.width = 64
        card.appendChild(image)
        name.textContent = key
        card.classList.add('card')
        card.appendChild(name)
        section.appendChild(card)
    }
    // for (var i=0;i<=jsonObj.length;i++) {
    //     var itemName = jsonObj[i]['item_name']
    //     if (itemName.toLowerCase().includes(string.toLowerCase()) || string.length == 0) {
    //         var card = document.createElement('div')
    //         var image = document.createElement('img')
    //         var name = document.createElement('p')
    //         image.src = './images/' + jsonObj[i]['file_name'] + '.png'
    //         image.width = 64
    //         card.appendChild(image)
    //         name.textContent = itemName
    //         card.classList.add('card')
    //         card.appendChild(name)
    //         section.appendChild(card)
    //     }
    // }
}

function drawMachines(data) {
    
    var machines = data['machines']
    var items = data['items']
    for (var key in machines) {
        var machine = machines[key]
        var div = document.createElement('div')
        var p = document.createElement('p')
        p.textContent = machine.name
        div.appendChild(p)
        for (var key in machine.tiers) {
            var tier = machine.tiers[key]
            console.log(machine.tiers)
            var p = document.createElement('p')
            p.textContent = key
            div.appendChild(p)
            var recipe = document.createElement('div')
            recipe.classList.add('recipe')
            for (var i=0;i<tier.length;i++) {
                recipe.appendChild(createElement(data,tier[i]['id'],tier[i]['count']))
            }   
            div.appendChild(recipe)         
        }
        section.appendChild(div)
    }
}

function createElement(data, id, count) {
    var div = document.createElement('div')
    div.classList.add('element')
    var img = document.createElement('img')
    var p = document.createElement('p')
    img.src = './images/' + data['items'][id]['file_name'] + '.png'
    img.width = 48
    div.appendChild(img)
    p.textContent = count
    p.classList.add('count')
    div.appendChild(p)
    return div
} 
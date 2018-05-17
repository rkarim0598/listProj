const form = document.querySelector('#mainForm')
const arrayyan = []
var counter = 0
const list = document.createElement('ul')

function parser(ev) {
    var index = ev.target.id.replace('button-', '')
    return index
}

function deleteDis(items, pos) {
    try {
        items.removeChild(items.childNodes[pos])
        arrayyan.splice(arrayyan.indexOf(items.childNodes[pos]))
        console.log(arrayyan)
    } catch (TypeError) {
        deleteDis(items, pos-1)
    }
}

function renderListItem(label, value) {
    const item = document.createElement('li')
    item.appendChild(document.createTextNode(`${label}: ${value}`))
    const button = document.createElement('BUTTON')
    button.innerHTML = 'Delete'
    button.setAttribute("id", `button-${counter}`)
    alert(button.id)
    item.appendChild(button)
    item.setAttribute("id", `thing-${counter}`)
    counter = counter + 1

    arrayyan.push(item)

    return item
}

function renderList(data) {
    // list.setAttribute("id", `list-${counter}`)
    const labels = Object.keys(data)
    labels.forEach(function(label) {
        const item = renderListItem(label, data[label])
        list.appendChild(item)
    })
    
    return list
}

const handleSubmit = function(ev) {
    ev.preventDefault()
    const f = ev.target
    const player = {
        name: f.playerName.value
    }
 
    const players = document.querySelector('#players')
    players.appendChild(renderList(player))
    const bob = document.getElementById(`button-${counter-1}`)
    bob.addEventListener("click", function() {
        var index = parser(event)
        deleteDis(list, index)
    })
    f.reset()
    f.playerName.focus()
}

form.addEventListener('submit', handleSubmit)
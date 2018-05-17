const form = document.querySelector('#mainForm')
const arrayyan = []
var counter = 0

function parser(ev) {
    var index = ev.target.id.replace('button-', '')
    return index
}

function deleteDis(list, pos) {
    try {
        list.removeChild(list.childNodes[pos])
        arrayyan.splice(arrayyan.indexOf(list.childNodes[pos]))
        console.log(arrayyan)
    } catch (TypeError) {
        deleteDis(list, pos-1)
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
    const list = document.createElement('ul')
    list.setAttribute("id", `list-${counter}`)
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
        deleteDis(players, index)
    })
    f.reset()
    f.playerName.focus()
}

form.addEventListener('submit', handleSubmit)
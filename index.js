const form = document.querySelector('#mainForm')
const arrayyan = []
var counter = 0

function deleteDis(ev) {
    var index = ev.target.id.replace('button-', '')
    console.log(index)
    list.removeChild(list.childNodes[parseInt(index)])
}

function renderListItem(label, value) {
    const item = document.createElement('li')
    item.appendChild(document.createTextNode(`${label}: ${value}`))
    const button = document.createElement('BUTTON')
    button.innerHTML = `Delete ${counter}`
    button.setAttribute("id", `button-${counter}`)
    alert(button.id)
    item.appendChild(button)
    item.setAttribute("id", `thing-${counter}`)
    // button.addEventListener("submit", deleteDis)
    counter = counter + 1
    // item.textContent = `${label}: ${value}`
    arrayyan.push(item)
    // debugger
    // const str = `button${counter}`
    // alert(str)
    // const bob = document.getElementById(`${button.id}`)
    // bob.addEventListener("submit", deleteDis)
    return item
}

function renderList(data) {
    const list = document.createElement('ul')

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
        alert('hi')
    })
    f.reset()
    f.playerName.focus()
}

form.addEventListener('submit', handleSubmit)
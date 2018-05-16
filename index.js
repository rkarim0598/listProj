const form = document.querySelector('#mainForm')

function renderListItem(label, value) {
    const item = document.createElement('li')
    item.textContent = `${label}: ${value}`

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

    f.reset()
    f.playerName.focus()
}

form.addEventListener('submit', handleSubmit)
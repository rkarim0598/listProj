const app = {
    init(selectors) {
      this.flicks = []
      this.max = 0
      this.list = document.querySelector(selectors.listSelector)
      this.template = document.querySelector(selectors.templateSelector)
  
      document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', ev => {
          ev.preventDefault()
          this.handleSubmit(ev)
        })
    },
  
    deletePlz(flicks, ev) {
        const actualDiv = document.querySelector('#flickList')
        const thingy = actualDiv.querySelector("[data-id='" + ev.target.dataset["id"] + "']")
        debugger
        flicks.indexOf(ev.target.dataset)
        actualDiv.removeChild(actualDiv.querySelector("[data-id='" + ev.target.dataset["id"] + "']"))
    },

    favPlz(flicks, ev) {
      const actualDiv = document.querySelector('#flickList')
      const thingy = actualDiv.querySelector("[data-id='" + ev.target.dataset["id"] + "']")

      // set background color to blue if not already faved, reset to white if unfaved
      if (thingy.style.backgroundColor === 'blue')
        thingy.style.backgroundColor = 'whitesmoke'
      else
        thingy.style.backgroundColor = 'blue'
    },

    moveUp(flicks, ev) {
      const actualDiv = document.querySelector('#flickList')
      const thingy = actualDiv.querySelector("[data-id='" + ev.target.dataset["id"] + "']")
      debugger
      var location = 0
      
      if (flicks.length == 1)
        return
      if (flicks[0].id == thingy.dataset["id"])
        return
      else {
        for (var i = 0; i < flicks.length; i++) {
          if (flicks[i].id == thingy.dataset["id"]) {
            location = i - 1
            break
          }
        }
        // debugger
        // actualDiv.insertBefore(actualDiv.querySelector())
        actualDiv.insertBefore(thingy, actualDiv.querySelector("[data-id='" + flicks[location].id + "']"))

        // swap in list
        temp = flicks[location]
        flicks[location] = flicks[location+1]
        flicks[location+1] = temp
      }
    },

    moveDown(flicks, ev) {
      const actualDiv = document.querySelector('#flickList')
      const thingy = actualDiv.querySelector("[data-id='" + ev.target.dataset["id"] + "']")
      console.log(thingy)
      var location = 0
      // debugger
      if (flicks.length == 1)
        return
      if (flicks[flicks.length-1].id == thingy.dataset["id"]) {
        console.log("here")
        return
      }
      else {
        for (var i = 0; i < flicks.length; i++) {
          if (flicks[i].id == thingy.dataset["id"]) {
            location = i + 1
            break
          }
        }

        actualDiv.insertBefore(actualDiv.querySelector("[data-id='" + flicks[location].id + "']"), thingy)

        //swap
        temp = flicks[location]
        flicks[location] = flicks[location-1]
        flicks[location-1] = temp
      }
    },

    setButtons(flick, item, theType, functionToExec, flicks) {
      button = item.children[1].querySelector(`${theType}`)
      button.dataset.id = flick.id
      button.addEventListener("click", function() {
        functionToExec(flicks, event)
      })
      return button
    },

    renderListItem(flick) {
      const item = this.template.cloneNode(true)
      item.classList.remove('template')
      item.dataset.id = flick.id
      item
        .querySelector('.flickName')
        .textContent = flick.name
      item.style.backgroundColor = 'whitesmoke'
      return item
    },

    handleSubmit(ev) {
      const f = ev.target
      const flick = {
        id: ++this.max,
        name: f.flickName.value,
      }
  
      this.flicks.unshift(flick)
  
      const item = this.renderListItem(flick)
      this.list.insertBefore(item, this.list.firstChild)
      deleteButton = this.setButtons(flick, item, '.alert', this.deletePlz, this.flicks)
      favButton = this.setButtons(flick, item, '.warning', this.favPlz, this.flicks)
      upButton = this.setButtons(flick, item, '.up', this.moveUp, this.flicks)
      downButton = this.setButtons(flick, item, '.down', this.moveDown, this.flicks)
      
      // upButton.style.opacity = 0.6
      // upButton.style.cursor = "not-allowed"
      
      f.reset()
    },
  }
  
  app.init({
    formSelector: '#flickForm',
    listSelector: '#flickList',
    templateSelector: '.flick.template',
  })
  
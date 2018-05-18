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
  
    deletePlz(ev) {
        console.log(ev.target.dataset)
        const actualDiv = document.querySelector('#flickList')
        actualDiv.removeChild(actualDiv.querySelector("[data-id='" + ev.target.dataset["id"] + "']"))
    },

    favPlz(ev) {
        console.log(ev.target)
        console.log("fav plz")
    },

    setButtons(flick, item, theType, functionToExec) {
        button = item.children[1].querySelector(`${theType}`)
        console.log(button)
        button.dataset.id = flick.id
        button.addEventListener("click", functionToExec)
        return button
    },

    renderListItem(flick) {
      const item = this.template.cloneNode(true)
      item.classList.remove('template')
      item.dataset.id = flick.id
      item
        .querySelector('.flickName')
        .textContent = flick.name
      return item
    },
  // TODO : fix this.setButtons part
    handleSubmit(ev) {
      const f = ev.target
      const flick = {
        id: ++this.max,
        name: f.flickName.value,
      }
  
      this.flicks.unshift(flick)
  
      const item = this.renderListItem(flick)
      this.list.insertBefore(item, this.list.firstChild)
      deleteButton = this.setButtons(flick, item, '.alert', this.deletePlz)
      favButton = this.setButtons(flick, item, '.warning', this.favPlz)
      f.reset()
    },
  }
  
  app.init({
    formSelector: '#flickForm',
    listSelector: '#flickList',
    templateSelector: '.flick.template',
  })
  
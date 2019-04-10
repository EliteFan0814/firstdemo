!function () {
  // 视图
  var view = View('section.messageBoard')
  var model = Model({resourceName: 'formMessage'})

  var controller = Controller({
    init: function(view){
      this.messageList = view.querySelector('#messageList')
      this.myMesssageForm = view.querySelector('#myMesssageForm')
      this.loadMessage()
    },
    loadMessage: function () {
      this.model.fetch().then((message) => {
        let array = message.map((items) => { return items.attributes })
        array.forEach((element) => {
          let li = document.createElement('li')
          li.innerHTML = element.name + ' ：' + element.content
          this.messageList.append(li)
        })
      }, (error) => { console.log(error) })
    },
    bindEvents: function () {
      this.myMesssageForm.addEventListener('submit', (e) => {
        e.preventDefault()
        // console.log(this)
        this.writeMessage()
      })
    },
    writeMessage: function () {
      let myMesssageForm = this.myMesssageForm
      let name = myMesssageForm.querySelector('[name=name]').value
      let content = myMesssageForm.querySelector('[name=content]').value
      if (name && content) {
        this.model.set({name: name, content: content}).then(function (object) {
          let li = document.createElement('li')
          li.innerHTML = object.attributes.name + ' ：' + object.attributes.content
          messageList.append(li)
          myMesssageForm.querySelector('[name=name]').value = ''
          myMesssageForm.querySelector('[name=content]').value = ''
        })
      } else {
        alert('内容不得为空！')
      }
    }
  })
  
  controller.init(view, model)
}.call()




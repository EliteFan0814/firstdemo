!function () {
  var view = document.querySelector('section.messageBoard')

  var controller = {
    view: null,
    messageList: null,
    myMesssageForm: null,
    init: function (view) {
      this.view = view,
        this.messageList = view.querySelector('#messageList'),
        this.myMesssageForm = view.querySelector('#myMesssageForm'),
        this.initAV(),
        this.loadMessage(),
        this.bindEvents()
    },
    initAV: function () {
      var APP_ID = 'vWPMDb3tWUd6t7jPBlxyXsHw-gzGzoHsz'
      var APP_KEY = 'Hti6mUX9b8p1MWcNdvC1pWE4'

      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    loadMessage: function () {
      let query = new AV.Query('formMessage')

      query.find().then((message) => {
        let array = message.map((items) => { return items.attributes })
        array.forEach((element) => {
          let li = document.createElement('li')
          li.innerHTML = element.name + ' ：' + element.content
          this.messageList.append(li)
        })
      }, () => { error })
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
        var FormMessage = AV.Object.extend('formMessage');
        var formMessage = new FormMessage();
        formMessage.save({
          name: name,
          content: content
        }).then(function (object) {
          console.log(object)
          let li = document.createElement('li')
          li.innerHTML = object.attributes.name + '说：' + object.attributes.content
          messageList.append(li)
          myMesssageForm.querySelector('[name=name]').value = ''
          myMesssageForm.querySelector('[name=content]').value = ''
        })
      } else {
        alert('内容不得为空！')
      }
    }
  }

  controller.init(view)

}.call()




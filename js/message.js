!function () {
  // 视图
  var view = document.querySelector('section.messageBoard')

  // 模型，进行相关数据操作
  var model = {
    //获取数据库链接
    initAV: function () {
      var APP_ID = 'vWPMDb3tWUd6t7jPBlxyXsHw-gzGzoHsz'
      var APP_KEY = 'Hti6mUX9b8p1MWcNdvC1pWE4'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    // 获取数据
    fetch: function () {
      let query = new AV.Query('formMessage')
      return query.find()
    },
    // 存储数据
    set: function (name, content) {
      let FormMessage = AV.Object.extend('formMessage')
      let formMessage = new FormMessage()
      return formMessage.save({
        name: name,
        content: content
      })
    }
  }
  
  // 控制器，控制各个模块执行
  var controller = {
    view: null,
    model: null,
    messageList: null,
    myMesssageForm: null,
    init: function (view, model) {
      this.view = view,
      this.model = model,
      this.messageList = view.querySelector('#messageList'),
      this.myMesssageForm = view.querySelector('#myMesssageForm'),
      this.model.initAV(),
      this.loadMessage(),
      this.bindEvents()
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
        this.model.set(name, content).then(function (object) {
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
  }

  controller.init(view, model)

}.call()




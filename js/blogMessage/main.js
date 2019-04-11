!function () {
    // 构建 View 层
    var view = View('#main-message')
    // 构建 Model 层
    var model = Model({ resourceName: 'BlogMessage' })
    // 构建 Controller 层
    var controller = Controller({
        init: function (view) {
            this.messageUl = view.querySelector('#message-ul')
            this.formMessage = view.querySelector('#form-message')
            this.loadMessage()
        }
    })
    // 执行
    controller.init(view, model)
}.call()
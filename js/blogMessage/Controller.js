window.Controller = function (options) {
    let init = options.init

    let object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            init.call(this, view)
            this.bindEvents()
        },
        loadMessage: function () {
            this.model.fetch().then((message) => {
                let array = message.map((items) => { return { attributes: items.attributes, createdAt: items.createdAt } })
                array.forEach((element) => {
                    let li = document.createElement('li')
                    let time = this.getTime(element.createdAt)
                    li.innerHTML = element.attributes.name + ' ：' + element.attributes.content + ' ' + time
                    this.messageUl.append(li)
                })
            }, (error) => { alert('加载失败！') })
        },
        bindEvents: function () {
            this.formMessage.addEventListener('submit', (e) => {
                e.preventDefault()
                this.writeMessage()
            })
        },
        writeMessage: function () {
            let formMessage = this.formMessage
            let message_name = formMessage.querySelector('#message-name').value
            let message_content = formMessage.querySelector('#message-content').value
            if (message_name && message_content) {
                this.model.set({ name: message_name, content: message_content }).then((success) => {
                    let li = document.createElement('li')
                    let time = this.getTime(success.createdAt)
                    li.innerHTML = message_name + ' : ' + message_content + ' ' + time
                    this.messageUl.append(li)
                    formMessage.querySelector('#message-name').value = ''
                    formMessage.querySelector('#message-content').value = ''
                }, function (error) {
                    alert('存储失败！')
                })
            } else {
                alert('请填写完整内容！')
            }
        },
        getTime: function (createdAt) {
            let allTime = createdAt
            let year = allTime.getFullYear()
            let month = allTime.getMonth() + 1
            let date = allTime.getDate()
            return time = year + '-' + month + '-' + date
        }
    }
    return object
}
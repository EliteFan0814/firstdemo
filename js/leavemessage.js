!function () {
    // 初始化数据库
    var APP_ID = 'vWPMDb3tWUd6t7jPBlxyXsHw-gzGzoHsz';
    var APP_KEY = 'Hti6mUX9b8p1MWcNdvC1pWE4';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });

    // 获取网页关键元素
    var messageUl = document.querySelector('#message-ul')
    var formMessage = document.querySelector('#form-message')

    // 加载数据路留言
    var query = new AV.Query('BlogMessage')
    query.find().then(function (BlogMessage) {
        let array = BlogMessage.map((items) => { return {attributes:items.attributes,createdAt:items.createdAt} })
        array.forEach((element) => {
            let li = document.createElement('li')
            let time = getTime(element.createdAt)
            li.innerHTML = element.attributes.name + ' ：' + element.attributes.content + ' ' + time
            messageUl.append(li)
        })
    }, function () { alert('加载失败！') })

    // 监听并添加留言
    formMessage.addEventListener('submit', function (e) {
        e.preventDefault()
        let message_name = document.querySelector('#message-name').value
        let message_content = document.querySelector('#message-content').value
        if (message_name && message_content) {
            let BlogMessage = AV.Object.extend('BlogMessage')
            let blogMessage = new BlogMessage()
            blogMessage.save({
                name: message_name,
                content: message_content
            }).then(function (object) {
                let li = document.createElement('li')
                let time = getTime(object.createdAt)
                li.innerHTML = message_name + ' : ' + message_content + ' ' + time
                messageUl.appendChild(li)
                document.querySelector('#message-name').value = ''
                document.querySelector('#message-content').value = ''
            }, function () {
                alert('存储失败！')
            })
        } else {
            alert('请填写完整内容！')
        }
    })
    // 获取时间
    function getTime(createdAt) {
        let allTime = createdAt
        let year = allTime.getFullYear()
        let month = allTime.getMonth() + 1
        let date = allTime.getDate()
        return time = year + '-' + month + '-' + date
    }
}.call()

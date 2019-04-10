window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'vWPMDb3tWUd6t7jPBlxyXsHw-gzGzoHsz'
            var APP_KEY = 'Hti6mUX9b8p1MWcNdvC1pWE4'
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch: function () {
            let query = new AV.Query(resourceName)
            return query.find()
        },
        // 存储数据
        set: function (object) {
            let FormMessage = AV.Object.extend(resourceName)
            let formMessage = new FormMessage()
            return formMessage.save(object)
        }
    }
}
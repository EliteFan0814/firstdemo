window.Model = function(options){
    let resourceMessage = options.resourceName
    return {
        //初始化数据库
        init: function(){
            var APP_ID = 'vWPMDb3tWUd6t7jPBlxyXsHw-gzGzoHsz';
            var APP_KEY = 'Hti6mUX9b8p1MWcNdvC1pWE4';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        //查询获取数据库
        fetch: function(){
            let query = new AV.Query(resourceMessage)
            return query.find()
        },
        //写入数据库
        set: function(object){
            let BlogMessage = AV.Object.extend(resourceMessage)
            let blogMessage = new BlogMessage()
            return blogMessage.save(object)
        }
    }
}
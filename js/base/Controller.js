window.Controller = function (options) {
    var init = options.init

    let object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            init.call(this,view)
            // init(view,model)
            console.log(this)
            // this.loadMessage()
            this.bindEvents()
        }
    }
    for(let key in options){
        if(key !== 'init'){
            object[key] = options[key]
        }
    }

    return object
}
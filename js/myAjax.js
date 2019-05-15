window.jQuery = function () { }
window.$ = jQuery
$.ajax1 = function (url, method, body, successFn, failFn) {
    let request = new XMLHttpRequest()
    request.open(method, url)
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                successFn.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body)
}

//上面的参数太多了，妈的记不住。
$.ajax2 = function (obj) {
    let url
    if (arguments.length === 1) {
        url = obj.url
    } else if (arguments.length === 2) {
        url = arguments[0]
        obj = arguments[1]
    }

    let method = obj.method
    let body = obj.body
    let successFn = obj.successFn
    let failFn = obj.failFn
    let headers = obj.headers
    for (let key in headers) {
        request.setRequestHeader(key, headers[key])
    }
    request.open(method, url)
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                successFn.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body)
}

$.ajax3 = function (obj) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        let url
        if (arguments.length === 1) {
            url = obj.url
        } else if (arguments.length === 2) {
            url = arguments[0]
            obj = arguments[1]
        }

        let method = obj.method
        let body = obj.body
        // let successFn = obj.successFn
        // let failFn = obj.failFn
        let headers = obj.headers
        for (let key in headers) {
            request.setRequestHeader(key, headers[key])
        }
        request.open(method, url)
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}

myBtn.addEventListener('click', function () {
    $.ajax2({
        url: '/test',
        method: 'post',
        body: 'fpc:syq',
        headers: {
            'Content-Type': 'application/x-www-form-encoded',
            fpc: 'syq'
        },
        successFn: function (responseText) {
            console.log(responseText)
        },
        failFn: function (request) {
            console.log(request)
        }
    })

    $.ajax3({
        url: '/test',
        method: 'post',
        body: 'fpc:syq',
        headers: {
            'Content-Type': 'application/x-www-form-encoded',
            fpc: 'syq'
        }
    }).then((result) => { console.log("成功" + result) }, (result) => { console.log("失败" + result) })

})

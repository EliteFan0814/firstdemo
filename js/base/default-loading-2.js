!function () {
    //初次加载页面loading动画
    var loading = document.getElementById("loading");
    setTimeout(function () {
        loading.classList.remove("loadActive");
    }, 1500);
}.call()

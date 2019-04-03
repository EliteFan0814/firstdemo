!function () {
    // nav 鼠标浮动显示
    let activeLi = document.querySelectorAll(".topBar ul>li")
    for (let i = 0; i < activeLi.length; i++) {
        activeLi[i].onmouseenter = function (event) {
            this.classList.add("active")
        }
        activeLi[i].onmouseleave = function (event) {
            this.classList.remove("active")
        }
    }
}.call()

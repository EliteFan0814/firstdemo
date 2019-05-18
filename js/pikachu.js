!function () {
    window.onload = function () {
        let duration = 50
        function writeCode(add_code, callBack) {
            console.log(1)
            let useCss = document.querySelector('.usecss')
            let prevcode = document.querySelector('.prevcodeinner')
            let n = 0
            let write_timer = setTimeout(function timer() {
                n++
                useCss.innerHTML += add_code.slice(n - 1, n)
                prevcode.innerHTML += add_code.slice(n - 1, n)
                prevcode.scrollTop = prevcode.scrollHeight
                if (n < add_code.length) {
                    write_timer = setTimeout(timer,duration)
                }else{
                    callBack && callBack()
                }
            }, duration)
        }

        $('.control').on('click', 'button', function (event) {
            let $btn = $(event.currentTarget)
            let speed = $btn.attr('data-speed')
            console.log(speed)
            $btn.attr('class', 'clicked').siblings().attr('class', 'unclick')
            switch(speed){
                case 'slow':
                duration = 100
                break
                case 'normal':
                duration = 50
                break
                case 'fast':
                duration = 10
                break
            }
        })

        writeCode(`
.nose {
    border: 11px solid red;
    border-color: black transparent transparent transparent;
    border-radius: 9px;
    position: absolute;
    left: calc(50% - 11px);
    /*或 transform: translateX(-50%)*/
    top: 28px;
}

.eye {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2e2e2e;
    position: absolute;
    border: 2px solid black;
}

.eye::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #ddd;
    position: absolute;
    left: 5px;
    top: 1px;
    border: 1px solid #000;
}

.eye.left {
    left: calc(50% - 25px - 90px)
}

.eye.right {
    right: calc(50% - 25px - 90px);
}

.blusher {
    width: 68px;
    height: 68px;
    background-color: #fc0d1c;
    border-radius: 50%;
    border: 2px solid #000;
    position: absolute;
    top: 70px;
}

.blusher.left {
    left: calc(50% - 34px - 140px)
}

.blusher.right {
    right: calc(50% - 34px - 140px)
}

.upperLip {
    width: 80px;
    height: 20px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    background-color: #fee433;
}

.upperLip.left {
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    left: calc(50% - 80px);
    transform: rotate(-15deg)
}

.upperLip.right {
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    right: calc(50% - 80px);
    transform: rotate(15deg);
}

.wrapper-lowerlip {
    position: absolute;
    bottom: 0;
    left: calc(50% - 70px);
    height: 110px;
    width: 140px;
    overflow: hidden;
    z-index: -1;
}

.lowerLip {
    width: 140px;
    height: 600px;
    border: 2px solid #000;
    background: #990513;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

.lowerLip::after {
    content: "";

    width: 100px;
    height: 200px;
    background: red;
    position: absolute;
    left: calc(50% - 50px);
    bottom: -120px;
    border-radius: 50%/20%;
}
body{
    background-color: #fee433;
}
        `, duration)
    }

}.call() 
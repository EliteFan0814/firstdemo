!function () {
    //让每个板块下移
    let currentShowList = document.querySelectorAll("[data-now]");
    for (let i = 1; i < currentShowList.length; i++) {
        currentShowList[i].classList.add("currentJump");
    }

    var topBar = document.getElementsByClassName("topBar")[0];
    window.onscroll = function () {
        // nav导航动画
        window.scrollY > 0 ? topBar.classList.add("topBarMove") : topBar.classList.remove("topBarMove");
        // 滑动到某板块，做跳出动画
        let minShowIndex = 0;
        for (let i = 1; i < currentShowList.length; i++) {
            if (Math.abs(currentShowList[i].offsetTop - window.scrollY) < Math.abs(currentShowList[minShowIndex].offsetTop - window.scrollY)) {
                minShowIndex = i;
            }
        }
        currentShowList[minShowIndex].classList.remove("currentJump")
        // nav 随着不同板块高亮
        let hrefId = currentShowList[minShowIndex].id;
        let tarrgetA = document.querySelector("a[href=\"#" + hrefId + "\"]");
        for (let i = 0; i < currentShowList.length; i++) {
            let hrefId = currentShowList[i].id;
            let tarrgetA = document.querySelector("a[href=\"#" + hrefId + "\"]");
            tarrgetA.parentElement.classList.remove("currentNow");
        }
        tarrgetA.parentElement.classList.add("currentNow");
    }
}.call()

!function () {
    // a 标签跳转平滑过渡动画
    let toAnchor = document.querySelectorAll(".topBar ul.clearfix>li>a");
    for (let i = 0; i < toAnchor.length; i++) {
        toAnchor[i].onclick = function (event) {
            event.preventDefault();
            let a = event.currentTarget;
            let hrefId = a.getAttribute("href");
            let element = document.querySelector(hrefId);
            console.log(element);
            // debugger
            let top = element.offsetTop;

            let n = 400;
            // let duration = 1000 / n;
            let targetop = top - 80;
            let currentTop = window.scrollY;
            let distance = (targetop - currentTop) / n;
            let t = Math.abs(((targetop - currentTop) / 100) * 100);

            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);

            var coords = { y: currentTop }; // Start at (0, 0)
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ y: targetop }, t) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    window.scrollTo(0, coords.y);
                })
                .start(); // Start the tween immediately.
        }
    }
}.call()

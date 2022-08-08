// circle.classList.add('background-orange')


let button = document.getElementById('button-for-circle')


let circlePlayground = document.getElementById('circle-playground')
let left = 0;

function addCircle(left) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circlePlayground.appendChild(circle);
    circle.style.left = left + "px"
}

for (let index = 0; index < 11; index++) {
    if (document.getElementsByClassName("circle").length !== 0) {
        left += 135;
    }

    addCircle(left)
}

button.addEventListener('click', function (event) {

    let circles = document.getElementsByClassName("circle")
    for (let index = 0; index < circles.length; index++) {
        let circle = circles[index];
        circle.classList.add('background-orange');

        let moveInterval = setInterval(function () {
            let top = circle.style.top ?
                parseInt(circle.style.top.replace("px", "")) :
                0;

            console.log(window.innerHeight);
            if (top < window.innerHeight) {
                circle.style.top = (top + Math.random() * 20) + "px";
            } else {
                addCircle(parseInt(circle.style.left))
            }
        }, 100)

        setTimeout(function () {
            circle.classList.remove('background-orange');
            clearInterval(moveInterval);
            console.log("3 seconds passed!")
        }, 100000)
    }


});
const ball = document.getElementById("ball");

const up = document.getElementById("up");
const left = document.getElementById("left");
const right = document.getElementById("right");
const down = document.getElementById("down");

const STEP = 15; // how many pixels the ball moves per click

function moveBall(direction) {
    ball.style.position = "relative";

    const currentTop = parseInt(ball.style.top) || 0;
    const currentLeft = parseInt(ball.style.left) || 0;

    switch (direction) {
        case "up":
            ball.style.top = currentTop - STEP + "px";
            break;

        case "down":
            ball.style.top = currentTop + STEP + "px";
            break;

        case "left":
            ball.style.left = currentLeft - STEP + "px";
            break;

        case "right":
            ball.style.left = currentLeft + STEP + "px";
            break;
    }
}

up.addEventListener("click", function () {
    moveBall("up");
});
down.addEventListener("click", function () {
    moveBall("down");
});
left.addEventListener("click", function () {
    moveBall("left");
});
right.addEventListener("click", function () {
    moveBall("right");
});

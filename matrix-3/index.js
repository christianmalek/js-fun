var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = ctx.canvas.width = window.innerWidth;
var height = ctx.canvas.height = window.innerHeight;

var m, n, i, j;
var cols = 10;
var rows = cols;
var r = 5;
var time = 0;
var speed = 0.01;
var backgroundFade = 0.1;

function loop() {
    var smallerSide = width < height ? width : height;
    m = smallerSide * 0.5 / cols;
    n = smallerSide * 0.5 / rows;

    //draw background
    ctx.fillStyle = "rgba(255,255,255," + backgroundFade + ")";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    for (i = 1; i <= cols; i++) {
        for (j = 1; j <= rows; j++) {
            ctx.beginPath();
            var red = 0;
            var green = 0;
            var blue = 0;
            red = Math.floor((Math.sin(time) * j * i) % 255);
            green = Math.floor((Math.sin(time * 0.5) * j * i) % 255);
            blue = Math.floor((Math.sin(time * 0.25) * j * i) % 255);
            var x, y;
            x = width / 2.0 + j * n * Math.cos(time) - width / 2.0 * Math.sin(-time+1) * Math.cos(time);
            y = height / 2.0 + j * m * Math.sin(time) - width / 2.0 * Math.sin(time) * Math.sin(time);

            //draw the point
            ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
            ctx.arc(x, y, r, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    }
    time += speed;
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

window.onresize = function (event) {
    width = ctx.canvas.width = window.innerWidth;
    height = ctx.canvas.height = window.innerHeight;
};
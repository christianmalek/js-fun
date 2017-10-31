var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = ctx.canvas.width = window.innerWidth;
var height = ctx.canvas.height = window.innerHeight;

var m, n, i, j;
var cols = 20;
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
    ctx.fillStyle = "rgba(0,0,0," + backgroundFade + ")";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    for (i = 1; i <= cols; i++) {
        for (j = 1; j <= rows; j++) {
            ctx.beginPath();
            var red = 255;
            var green = 255;
            var blue = 255;
            /*red = Math.floor((Math.sin(time) * j * i) % 255);
            green = Math.floor((Math.sin(time * 0.5) * j * i) % 255);
            blue = Math.floor((Math.sin(time * 0.25) * j * i) % 255);*/
            var x, y;
            x = width / 2.0 + j * n * Math.cos(time) * Math.sin(time * 2);
            y = height / 2.0 + j * m * Math.sin(time) * Math.cos(time);

            //draw the point
            ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
            ctx.arc(x, y, r * (Math.sin(time) + 1), 0, 2 * Math.PI, false);
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
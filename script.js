// background-color // 
document.body.style.background = "darkgray";


// canvas // 

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "dimgray";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// border //

document.getElementById("myCanvas").style.border = "thick solid black";

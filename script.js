var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = "800";
var height = "500";
var itemX = Math.floor(Math.random() * 75) * 10;
var itemY = Math.floor(Math.random() * 45) * 10;
var enemyX = 800
var enemyY = 500;
var playerX = 0;
var playerY = 0;

document.onkeydown = function(t) {
    if (t.code == "ArrowRight" || t.code == "ArrowDown" || t.code == "ArrowLeft" || t.code == "ArrowUp") {
        move(t.code, 1);
    }
}

document.onkeyup = function(t) {
    if (t.code == "ArrowRight" || t.code == "ArrowDown" || t.code == "ArrowLeft" || t.code == "ArrowUp") {
        move(t.code, 0);
    }
}

var right = 0;
var down = 0;
var left = 0;
var up = 0;

var player_speed = 7;

function move(r, s) {
    if (s == 1) {
        switch (r) {
            case 'ArrowRight':
                right = 1;
                break;
            case 'ArrowDown':
                down = 1;
                break;
            case 'ArrowLeft':
                left = 1;
                break;
            case 'ArrowUp':
                up = 1;
                break;
        }
    } else {
        switch (r) {
            case 'ArrowRight':
                right = 0;
                break;
            case 'ArrowDown':
                down = 0;
                break;
            case 'ArrowLeft':
                left = 0;
                break;
            case 'ArrowUp':
                up = 0;
                break;
        }
    }
}
window.onload = loop = setInterval(function() {

    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, 800, 500);
    ctx.strokeRect(0, 0, 800, 500);

    if ((up || down) && (left || right)) {
        defacto_speed = player_speed / Math.sqrt(3);
    } else {
        defacto_speed = player_speed;
    }
    playerX += defacto_speed * (right - left);
    playerY += defacto_speed * (down - up);

    playerX = (playerX <= 0 ? 0 : playerX >= 775 ? 775 : playerX);
    playerY = (playerY <= 0 ? 0 : playerY >= 475 ? 475 : playerY);

    ctx.fillStyle = "green";
    ctx.fillRect(playerX, playerY, 25, 25);
    ctx.strokeRect(playerX, playerY, 25, 25);

    if ((Math.abs(itemX - playerX) < 25) && (Math.abs(itemY - playerY) < 25)) {
        confirm('JE HEBT M! wil je doorspelen?'); 
        location.reload();
    }

    ctx.fillStyle = "gray";
    ctx.fillRect(itemX, itemY, 25, 25);
    ctx.strokeRect(itemX, itemY, 25, 25);

    dir = Math.atan2(playerY - enemyY, enemyX - playerX);
    enemyX -= 5 * Math.cos(dir);
    enemyY += 5 * Math.sin(dir);

    ctx.fillStyle = "red";
    ctx.fillRect(enemyX, enemyY, 25, 25);
    ctx.strokeRect(enemyX, enemyY, 25, 25);

    if ((Math.abs(enemyX - playerX) < 25) && (Math.abs(enemyY - playerY) < 25)) {
        confirm('je bent gepakt! wil je nog een keer spelen?')
        location.reload();
        clearInterval(loop);
    }
}, 20);

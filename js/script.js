
var trigger = document.querySelector('button#trigger');
var choco = document.querySelector('img#choco');
$(function () {
    if (!$('.envelope').hasClass('open')) {
        $('.envelope').click(function () {
            $(this).removeClass('new').addClass('open');
            setTimeout(function () {
                document.querySelector('.cake').style.display = 'block' //flower or cake?
            }, 2250)
        });
    }
});
function flower() {
    choco.style.display = 'block';
}
trigger.addEventListener('click', flower);
console.log("Hello World");
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;
var mousex = 0;
var mousey = 0;
addEventListener("mousemove", function () {
    mousex = event.clientX;
    mousey = event.clientY;
});
var grav = 0.99;
c.strokeWidth = 5;
function randomColor() {
    return (
        "rgba(" +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.ceil(Math.random() * 10) / 10 +
        ")"
    );
}
function Heart() {
    this.color = "#F8C3CDeb";
    this.size = Math.random() * 20 + 14;
    this.startSize = this.size;
    this.x = Math.random() * (tx - this.size * 2) + this.size;
    this.y = Math.random() * (ty - this.size);
    this.dy = Math.random() * 2;
    this.dx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() / 5;
    this.update = function () {
        c.beginPath();
        c.moveTo(this.x, this.y + this.size / 4);
        c.quadraticCurveTo(this.x, this.y, this.x + this.size / 4, this.y);
        c.quadraticCurveTo(this.x + this.size / 2, this.y, this.x + this.size / 2, this.y + this.size / 4);
        c.quadraticCurveTo(this.x + this.size / 2, this.y, this.x + this.size * 3 / 4, this.y);
        c.quadraticCurveTo(this.x + this.size, this.y, this.x + this.size, this.y + this.size / 4);
        c.quadraticCurveTo(this.x + this.size, this.y + this.size / 2, this.x + this.size * 3 / 4, this.y + this.size * 3 / 4);
        c.lineTo(this.x + this.size / 2, this.y + this.size);
        c.lineTo(this.x + this.size / 4, this.y + this.size * 3 / 4);
        c.quadraticCurveTo(this.x, this.y + this.size / 2, this.x, this.y + this.size / 4);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };
}

function Heart() {
    this.color = "#F8C3CDeb";
    this.size = Math.random() * 30 + 20; // Ajustar el rango de tamaño para hacer los corazones más grandes
    this.startSize = this.size;
    this.x = Math.random() * (tx - this.size * 2) + this.size;
    this.y = Math.random() * (ty - this.size);
    this.dy = Math.random() * 4 +2; //ajustar la velocidad para que salten los corazones mas alto
    this.dx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() / 5;
    this.update = function () {
        c.beginPath();
        c.moveTo(this.x, this.y + this.size / 4);
        c.quadraticCurveTo(this.x, this.y, this.x + this.size / 4, this.y);
        c.quadraticCurveTo(this.x + this.size / 2, this.y, this.x + this.size / 2, this.y + this.size / 4);
        c.quadraticCurveTo(this.x + this.size / 2, this.y, this.x + this.size * 3 / 4, this.y);
        c.quadraticCurveTo(this.x + this.size, this.y, this.x + this.size, this.y + this.size / 4);
        c.quadraticCurveTo(this.x + this.size, this.y + this.size / 2, this.x + this.size * 3 / 4, this.y + this.size * 3 / 4);
        c.lineTo(this.x + this.size / 2, this.y + this.size);
        c.lineTo(this.x + this.size / 4, this.y + this.size * 3 / 4);
        c.quadraticCurveTo(this.x, this.y + this.size / 2, this.x, this.y + this.size / 4);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };
}

var hearts = [];
for (var i = 0; i < 50; i++) {
    hearts.push(new Heart());
}

function animate() {
    if (tx != window.innerWidth || ty != window.innerHeight) {
        tx = window.innerWidth;
        ty = window.innerHeight;
        canvas.width = tx;
        canvas.height = ty;
    }
    requestAnimationFrame(animate);
    c.clearRect(0, 0, tx, ty);
    for (var i = 0; i < hearts.length; i++) {
        hearts[i].update();
        hearts[i].y += hearts[i].dy;
        hearts[i].x += hearts[i].dx;
        if (hearts[i].y + hearts[i].size >= ty) {
            hearts[i].dy = -hearts[i].dy * grav;
        } else {
            hearts[i].dy += hearts[i].vel;
        }
        if (hearts[i].x + hearts[i].size > tx || hearts[i].x - hearts[i].size < 0) {
            hearts[i].dx = -hearts[i].dx;
        }
        if (mousex > hearts[i].x - 20 &&
            mousex < hearts[i].x + 20 &&
            mousey > hearts[i].y - 50 &&
            mousey < hearts[i].y + 50 &&
            hearts[i].size < 100) { // Ajustar el tamaño máximo que pueden alcanzar los corazones
            hearts[i].size += 5;
        } else {
            if (hearts[i].size > hearts[i].startSize) {
                hearts[i].size += -5;
            }
        }
    }
}
animate();

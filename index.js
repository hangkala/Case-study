const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const tx = window.innerWidth - 10;
const ty = window.innerHeight - 20;
canvas.width = tx;
canvas.height = ty;

function Bar(height,width) {
    this.color = "#0C477F";
    this.height = height;
    this.width = width;
    this.y = canvas.height - this.height;
    this.x = (canvas.width - this.width)/2;
    //console.log(this.x,this.y);// 623 / 617
    this.update = function() {
        c.fillStyle = this.color;
        c.fillRect(this.x,this.y,this.width,this.height);
        c.fill();
    };
}
let bar = new Bar(20,200);

function Ball() {
    this.color = '#339CFF';
    this.radius = 20;
    this.x = canvas.width/2;
    this.y = canvas.height - bar.height - this.radius;
    this.dy = -5;
    this.dx = 5;
    //this.vel = 10;
    this.update = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();
        //c.stroke();
    };
}
let bal = new Ball();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let rightPressed = false;
let leftPressed = false;
let upPressed = false;

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if (e.key == "Up" || e.key == "ArrowUp"){
        upPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if (e.key == "Up" || e.key == "ArrowUp"){
        upPressed = true;
    }
}

function move() {
    c.clearRect(0, 0, tx, ty);
    bar.update();
    bal.update();

    if (rightPressed) {
        bar.x += 15;
        //bal.x += 15;
    } else if (leftPressed) {
        bar.x -= 15;
        //bal.x -= 15;
    }
    if (upPressed) {
        bal.x += bal.dx;
        bal.y += bal.dy;
        if (bal.x < 0 || bal.x > canvas.width) bal.dx = -bal.dx;
        if (bal.y < 0 || bal.y > canvas.height) bal.dy = -bal.dy;
        else if (bal.y + bal.dy > canvas.height - bal.radius - bar.height) {
            if (bal.x > bar.x && bal.x < bar.x + bar.x) {
                bal.dy = -bal.dy;
            } else {
                alert("GAME OVER");
                document.location.reload();
                clearInterval(interval);
            }
        }
    }
        if (rightPressed && bar.x > canvas.width - bar.width) {
            bar.x -= 15;
        } else if (leftPressed && bar.x < 0) {
            bar.x += 15;
        }
}
    interval = setInterval(move, 10);



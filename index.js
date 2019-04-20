function Bar(width,height) {
    this.width = width;
    this.height = height;
    this.x = 100;
    this.y = 100;
    this.draw = function () {
        let r = document.getElementById("demo");
        let ctx = r.getContext('2d');
        ctx.fillStyle = "#FF5733";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
}
function move() {
    this.moveLeft = function () {
        this.style.left = ctx.style.left - 10 + 'px';
    };
    this.moveRight = function () {
        ctx.style.left = ctx.style.left + 10 + 'px';
    };
    this.moveBar = function (evt) {
        switch (evt.keyCode) {
            case 37:
                this.moveLeft();
                break;
            case 39:
                this.moveRight();
                break;
        }
    };
    this.movingBar = function () {
        window.addEventListener('keydown', move);
    };
}

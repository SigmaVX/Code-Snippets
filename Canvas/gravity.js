const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Global Vars
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
const mouse = {x: innerWidth / 2, y: innerHeight / 2}
let gravity = 1;
let friction = 0.80;
let sideFriction = 0.5;
let ball = null;

// Utilities
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
    init()
})

addEventListener("mousemove", ()=>{
    canvas.width = innerWidth
    canvas.height = innerHeight
    init()
})

// Objects
class Ball {
    constructor (x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.radius = radius;
        this.color = color;
        this.strokeIndex = randomIntFromRange(0, colors.length);
    
        this.draw = function() {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()
            c.strokeStyle = colors[this.strokeIndex];
            c.stroke();
            c.closePath()
        }

        this.update = function() {
            // Reverse DY Velocity If Bottom Reached
            // Bounce Back Slowed By Friction Var
            // DY Added To Prevent Crossing Height
            if(this.y + this.radius + this.dy > canvas.height){
                // console.log(canvas.height)
                // console.log(this.y + this.radius)
                this.dy = -this.dy * friction;
            } else {
                // Accelerate Velocity As Dropping
                // Forces A Negative Value To Slow Upwards
                // Triggers DY Back To Downward As Neg Turns Pos
                this.dy += gravity;   
            }

            if((this.x + this.radius + this.dx > canvas.width) || (this.x - this.radius < 0)){
                this.dx = -this.dx;
            } 

            // Change X Once On Floor & Slow It Over Time
            if(Math.round(this.y + this.radius) === canvas.height){
                console.log("hit");
                this.x += this.dx * sideFriction;
            }

            // Increment Velocity
            this.y += this.dy;
            this.draw()
        }
    }
}

// Implementation
function init() {
    ballsArray = [];
    for (let i = 0; i < 100; i++) {
        let radius = randomIntFromRange(5, 20);
        // Deduct Radius To Prevent Spawn Into Bottom Of Screen
        let y = randomIntFromRange(radius, canvas.height - radius);
        let x = randomIntFromRange(radius, canvas.width - radius);
        let dy = randomIntFromRange(-2, 2);
        let dx = randomIntFromRange(-2, 2);
        let colorIndex = randomIntFromRange(0, colors.length);
        ball = new Ball(x, y, dx, dy, radius, colors[colorIndex]);
        ballsArray.push(ball)
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    for(let i = 0; i < ballsArray.length; i++){
        ballsArray[i].update();
    }
}

init()
animate()
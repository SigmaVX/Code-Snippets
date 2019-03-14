const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "#111";

// Global Vars
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
const mouse = {x: innerWidth / 2, y: innerHeight / 2};
let circle1 = null;
let circle2 = null;

// Utilities
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function getDistance(x1, y1, x2, y2) {
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
class Circle {
    constructor (x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.radius = radius;
        this.color = color;
    
        this.draw = function() {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()
            c.strokeStyle = "grey";
            c.stroke();
            c.closePath()
        }

        this.update = function() { 
            this.draw()
        }
    }
}

// Implementation
function init() {
    circle1 = new Circle(canvas.width/2, canvas.height/2, 0, 0, 100, null);
    circle2 = new Circle(null, null, 0, 0, 30, null);   
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    // Sets X To Mouse Position
    circle2.x = mouse.x;
    circle2.y = mouse.y;

    // Uses Pythagorean Theorem To Get Distance
    let distance = getDistance(circle1.x, circle1.y, circle2.x, circle2.y);

    // Change Color If Distance < Objects' Width
    if(distance < circle1.radius + circle2.radius){
        circle1.color = "purple";
        circle2.color = "yellow";
    } else {
        circle1.color = "red";
        circle2.color = "blue";
    }

    circle1.update();
    circle2.update();
}

init()
animate()
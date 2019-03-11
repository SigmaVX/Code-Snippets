const canvas = document.querySelector("canvas");
// console.log(canvas);

// Set Canvas To Window Size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set Library For Methods
let c = canvas.getContext("2d");

// Global Variables For Construcor & Interactivity
// ==============================================================================
let mouse = {x: null, y: null};
let maxRadius = 40;
let colorArray = ["#FF9AED", "#5E2671", "#31E7FF", "#FF846A", "#FF542F"];

// Array To Hold Multiple Shapes/Circles
let circleArray = [];

// Interactivity - Event Listeners (Optional For Constructor)
// ==============================================================================
window.addEventListener("mousemove", (event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(event);
    // console.log(mouse);
})

// Annimate Multiple With Class/Constructor
// ==============================================================================

// Constructor Used To Make Indvidual Shapes
class Circle {
    constructor (x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        // Used To Reset To Original Size Rather Than A Fixed PX
        this.originalSize = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length - 1)];
        this.stroke = colorArray[Math.floor(Math.random() * colorArray.length - 1)];
        console.log(Math.floor(Math.random * colorArray.length - 1))

        this.draw = function(){
            // Draws The Circle
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
            c.strokeStyle = this.color; 
            c.fillStyle = this.stroke;
            c.stroke();
            c.fill();
        }

        this.update = function(){
            // Changes The Direction Based On Bounds
            if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
                this.dx = -this.dx;
            }

            if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.dy = -this.dy;
            }

            // Increment/Decrement On Each Loop
            this.x += this.dx;
            this.y += this.dy;

            // Interactivity (Optional) - If X/Y Within Distance To Mouse
            if((mouse.x - this.x < 50)
                && (mouse.x - this.x > -50) 
                && (mouse.y - this.y < 50) 
                && (mouse.y - this.y > -50)){
                    // Only Increase If Radius If Shape Is Smaller Than 40px
                    // Keeps Size From Getting Too Big
                    if(this.radius < maxRadius){
                        this.radius += 0.5;
                    }
            // Compare To Min Radius Which Is Original Size
            // Prevents From All Shrinking To A Single Size
            } else if (this.radius > this.originalSize){
                this.radius -= 0.5;
            }

            // Render A Circle
            this.draw();
        }
    }
}

// Build Initial Shapes
const buildShapes = () =>{

    // Not Used - if you want a single circle (i.e. no loop)    
    // let circle = new Circle(200, 200, 5, 5, 30);

    // Resets Array Each Time
    circleArray = []

    // Loop To Add Random Circles To Array
    for(let i = 0; i < 20; i++){
        // Set Random Variable Inputs
        let radius = Math.random() * 20  + 10;
        let x = Math.random() * (innerWidth - radius*2) + radius;
        let y = Math.random() * (innerHeight - radius*2) + radius;
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 4;
        circleArray.push(new Circle(x,y,dx,dy,radius));
    }

}

const constructorAnnimation = () =>{
    requestAnimationFrame(constructorAnnimation);

    // Clear Canvas - Prior Render
    c.clearRect(0,0,window.innerWidth, window.innerHeight);

    // Loop Through Array To Draw/Annimate
    for(let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }

    // Not used - just run update on one cicle if not using a loop
    // circle.update();
}

// Screen Resize Event Listener
// ==============================================================================
window.addEventListener("resize", (event)=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    buildShapes();
})

// Start Build & Annimation On Load
// ==============================================================================
buildShapes();
constructorAnnimation();
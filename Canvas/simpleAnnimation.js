const canvas = document.querySelector("canvas");
// console.log(canvas);

// Set Canvas To Window Size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set Library For Methods
let c = canvas.getContext("2d");



// Annimated Single Circle
// ==============================================================================

// Set Random X & Y
let radius = 40;
// Last two terms prevent spawning partial circles on edges
let x = Math.random()* (innerWidth - radius*2) + radius;
let y = Math.random()* (innerHeight - radius*2) + radius;


// Velocity - Sets Increment/Decrement Value
// Random Picks Pos or Neg So Can Move Left or Right At Start
let dx = (Math.random() - 0.5) * 5;
let dy = (Math.random() - 0.5) * 4;

// Loop For Annimation
const annimate = () =>{
    requestAnimationFrame(annimate);

    // Clear Canvas - Prior Render
    c.clearRect(0,0,window.innerWidth, window.innerHeight);

    // Draws The Circle
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI*2, true);
    c.strokeStyle = "red";
    c.fillStyle="purple"
    c.stroke();
    c.fill();

    // Changes The Direction Based On Bounds
    if(x + radius > innerWidth || x - radius < 0){
        dx = -dx;
    }

    if(y + radius > innerHeight || y - radius < 0){
        dy = -dy;
    }

    // Increment/Decrement On Each Loop
    x += dx;
    y += dy;
}

// Start The Annimation
annimate();


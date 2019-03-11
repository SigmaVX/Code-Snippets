const canvas = document.querySelector("canvas");
// console.log(canvas);

// Set Canvas To Window Size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set Library For Methods
let c = canvas.getContext("2d");

// Draw Static Objects
// ==============================================================================

// Create Rectangles - Stroke No Fill
c.rect(500,20,150,100);
c.strokeStyle = "blue";
c.stroke();

// Create Rectangles - Fill No Stroke
c.fillStyle = "rgba(200,20,55,0.3)";
c.fillRect(100,100,100,200);
c.fillStyle = "rgba(100,200,55,0.7)";
c.fillRect(300,500,100,100);
c.fillStyle = "yellow";
c.fillRect(200,300,200,100);

// Create Lines
c.beginPath();
c.moveTo(10, 10);
c.lineTo(250,400);
c.lineTo(1000,200);
c.strokeStyle = "#fa34a3";
c.stroke();

// Create Circle - Connected To Line
// Shapes Connect To Lines If No beginPath()
c.arc(50, 100, 40, 0, Math.PI*2, false);
c.strokeStyle = "blue";
c.stroke()

// Circle - Not Connected
c.beginPath();
c.arc(500, 50, 40, 0, Math.PI*2, true);
c.strokeStyle = "red";
c.stroke()
c.fillStyle ="yellow";
c.fill();

// Random Repeated Elements - Using Loop
for (let i = 0; i < 2; i++){
    c.beginPath();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.random();

    c.arc(x, y, (40 + (i*2)), 0, Math.PI*2, true);
    c.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;    
    c.stroke();
}



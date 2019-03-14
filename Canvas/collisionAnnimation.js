const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "#eee";

// Global Vars
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
const mouse = {x: innerWidth / 2, y: innerHeight / 2};
let particlesArray = [];
let particle = null;

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
    // canvas.width = innerWidth
    // canvas.height = innerHeight
    // init()
})



// Geometric Function One
// ===================================================================================
//  Takes velocities and alters them as if the coordinate system they're on was rotated
//  @param  Object | velocity | The velocity of an individual particle
//  @param  Float  | angle    | The angle of collision between two objects in radians
//  @return Object | The altered x and y velocities after the coordinate system has been rotated
 

const rotate = (velocity, angle) => {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

// Geometric Function Two
// ===================================================================================
// Swaps out two colliding particles' x and y velocities after
// running through an elastic collision reaction equation 
// @param  Object | particle      | A particle object with x and y coordinates, plus velocity
// @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
// @return Null | Does not return a value
 
const resolveCollision = (particle, otherParticle) => {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}


// Constructor For Shape Objects
class Particle {
    constructor (x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.velocity = {x: dx, y: dy}
        this.mass = 1;
        this.opacity = 0;
        this.radius = radius;
        this.color = color;
        this.stroke = randomColor(colors);
    
        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.save();
            c.globalAlpha = this.opacity;
            c.fillStyle = this.color;
            c.fill();
            c.restore();
            c.strokeStyle = this.stroke;
            c.stroke();
            c.closePath();
        }

        this.update = (particles) => { 
            // Check Distances Between All Particles
            for(let i = 0; i < particles.length; i++){
                // Skips Loop If Particle Is Evaluating Itself
                if(this === particles[i]) continue;
                let distance = getDistance(this.x, this.y, particlesArray[i].x, particlesArray[i].y);
                if((distance - this.radius - particlesArray[i].radius) < 0){
                    console.log("Bump!!!");
                    resolveCollision(this, particles[i]);
                }
            }

            // Changes The Direction Based On Bounds
            if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
                this.velocity.x = -this.velocity.x;
            }

            if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.velocity.y = -this.velocity.y;
            }

            // Mouse Colision Detection
            if(getDistance(mouse.x, mouse.y, this.x, this.y) < 30){
                this.opacity += 0.2;
            }

            // Add Velocity
            this.x += this.velocity.x;
            this.y += this.velocity.y;

            this.draw()
        }
    }
}

// Implementation
function init() {
    particlesArray = [];
    for (let i = 0; i < 100; i++) {
        let radius = randomIntFromRange(10, 15);
        let y = randomIntFromRange(radius, canvas.height - radius);
        let x = randomIntFromRange(radius, canvas.width - radius);
        let dy = randomIntFromRange(-2, 2);
        let dx = randomIntFromRange(-2, 2);
        let color = randomColor(colors);

        if(i !== 0){
            for(let j = 0; j < particlesArray.length; j++){
                // Calculate Distances On New Particle Vs All Prior
                let distance = getDistance(x, y, particlesArray[j].x, particlesArray[j].y);
                // If Distances Less 0 After Accounting For Each's Radius
                if((distance - radius - particlesArray[j].radius) < 0){
                    // Regenerate Random X & Y
                    y = randomIntFromRange(radius, canvas.height - radius);
                    x = randomIntFromRange(radius, canvas.width - radius);
                    // Forces Loop To Run Again Until If Condition Not Met
                    j = -1;
                }
            }
        }
        particle = new Particle(x, y, dx, dy, radius, color);
        particlesArray.push(particle)
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update(particlesArray);
    }
}

init()
animate()

var things=["peas", "apples", "carrots", "onions"];
var numbers=[25,4,6,100,0,-1];
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}]
    
console.log("Raw Data: ",things,numbers);


// Regular Sort (Smallest to Largest) - Only Works On Strings 
things.sort();
numbers.sort();
console.log("Sort Data: ",things,numbers);
// Find Smallest and Highest Values 
console.log("Lowest Values: ",things[0],numbers[0]);
console.log("Highest Values: ",things[things.length-1],numbers[numbers.length-1]);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Reverse Sort (Largest to Smallest) - Only Works On Strings 
things.reverse();
numbers.reverse();
console.log("Reverse Sort Data: ",things,numbers);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Numeric Sort (Smallest to Largest) - Only Works On Numbers
things.sort(function(a, b){return a - b});
numbers.sort(function(a, b){return a - b});
console.log("Numeric Sort Data: ",things,numbers);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Numeric Reverse Sort (Largest to Smallest) - Only Works On Numbers
things.sort(function(a, b){return b - a});
numbers.sort(function(a, b){return b - a});
console.log("Numeric Reverse Sort Data: ",things,numbers);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Find Max Values - Numbers Only
console.log("Max Value: " + Math.max.apply(null, things));
console.log("Max Value: " + Math.max.apply(null, numbers));
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Random Sort - Works On Strings and Numbers
things.sort(function(a, b){return 0.5 - Math.random()});
numbers.sort(function(a, b){return 0.5 - Math.random()});
console.log("Random Sort Data: ",things,numbers);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Sort Nested Arrays
console.log("Nested Array Raw: " +  cars[0].type + " " + cars[0].year + " | " +
cars[1].type + " " + cars[1].year + " | " + cars[2].type + " " + cars[2].year);
cars.sort(function(a, b){return a.year - b.year});
console.log("Nested Array Sort: " +  cars[0].type + " " + cars[0].year + " | " +
cars[1].type + " " + cars[1].year + " | " + cars[2].type + " " + cars[2].year);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");


// Join Arrays
console.log("Joined :" + things.concat(numbers));

// 


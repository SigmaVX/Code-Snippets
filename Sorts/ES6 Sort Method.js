// Grab All Variables From Command Line
var rawNumbers = process.argv.slice(2);
console.log(rawNumbers);

// new es6 for bubble sorting - a, b means accending sort
var sortedNumbers = rawNumbers.sort(function(a, b){
    return parseFloat(a) - parseFloat(b);
});
console.log(sortedNumbers);

// add extra methods for sorting and randomization


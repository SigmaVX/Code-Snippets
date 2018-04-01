
var musicImport = require("./ess.js");

// Log The Export
console.log(musicImport);

// Look The Keys From Export Object Variable
console.log("A good band is " + musicImport.good);
console.log("A better band is " + musicImport.better);
console.log("A best band is " + musicImport.best);

// Alt Method With For In
for (var key in musicImport){
    console.log("A " + key + " band is " + musicImport[key]);
};

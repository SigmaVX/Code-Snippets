
var musicImport = require("./ess.js");
console.log(musicImport);


console.log("A good band is " + musicImport.good);
console.log("A better band is " + musicImport.better);
console.log("A best band is " + musicImport.best);

// Alt Method With For In
for (var key in musicImport){
    console.log("A " + key + " band is " + musicImport[key]);
};

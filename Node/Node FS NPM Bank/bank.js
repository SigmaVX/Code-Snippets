var fs = require("fs");

var balance;
var numbersArray;
var input = process.argv[2];
var amount = parseFloat(process.argv[3]);


function total(){
    // creates txt file to store numbers
    fs.readFile("bank.txt", "utf8", function(error, data){
        if(error) {
            return console.log(error);
        } else {
            // creates new array from the stored string
            numbersArray = data.split(",");
            // console.log(numbersArray);
            balance = 0;
            // sums numbers from new array
            for (var i=0; i < (numbersArray.length - 1); i++){
                balance += parseFloat(numbersArray[i]);
                // console.log("Your Balance: $" + balance); 
            }
            console.log("Your Balance: $" + balance); 
        }
    });
}

// runs total function to display balance
if (input === "total"){
    total();
}

// adds money to user balance using txt file
if (input === "deposit"){
    // adds deposit amount to txt string with comma seperator
    fs.appendFile("bank.txt", amount + ",", function(error){
        if(error) {
            return console.log(error);
        } else {
            console.log("Deposit Of " + amount + " Accepted");
            total();
        }
    });
}

if (input === "withdraw"){
    // adds deposit amount to txt string with comma seperator
    fs.appendFile("bank.txt", "-" + amount + ",", function(error){
        if(error) {
            return console.log(error);
        } else {
            console.log("Withdraw Of " + amount + " Accepted");
            total();
        }
    });
}   

if (input === "lotto"){ 
    var luck = Math.random();
    if(luck < 0.4){ 
        fs.appendFile("bank.txt", "-1, 100,", function(error){
            if(error) {
                return console.log(error);
            } else {
                console.log("Lotto Cost $1 But Your A $100 Winner!");
                total();
            } 
        });
    } else {
        fs.appendFile("bank.txt", "-1,", function(error){
            if(error) {
                return console.log(error);
            } else {
                console.log("Lotto Cost $1...And You Lost!");
                total();
            } 
        });
    }  
}
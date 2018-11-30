var match = false;
var luck;
var newLuck;
var loopCount = 0;


function randomPick(){
    // Picks Number between 1 (inclusive) and 10 (inclusive) 
    newLuck = Math.floor((Math.random() * 10) + 1);
    console.log("New Luck Is: " + newLuck);
    console.log("Old Luck Is: " + luck);
    if (luck === newLuck){
        match = true;
        while (match === true){
            loopCount++;
            newLuck = Math.floor((Math.random() * 10) + 1);
            if(luck !== newLuck){
                // changes condition
                match = false;
                // sets luck to new number
                luck = newLuck;
                // adds data to HTML
                $("#display").append(newLuck+" ");
                $("#loopCount").html(loopCount);
            } else {
                console.log("No Luck");
            }
        }
    } else {
        luck = newLuck;
        // adds data to HTML
        $("#display").append(newLuck+ " ");
        $("#loopCount").html("0");
    }
}

// just to show an alt method of while loop
var i = 0;
while (i < 10){
    console.log(i);
    i++;
}

// Event Handler    
$("#pick").on("click", function(event){
    event.preventDefault();
    console.log("click ok");
    randomPick();
});
var request = require("request");

// Grab or assemble the movie name and store it in a variable called "movieName"
// Slice will say that the rest of arugments is one big string - the 2 ignores first two terms
var movieName = process.argv.slice(2).join(" ");

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// Log the URL
console.log(queryUrl);
console.log("++++++++++++"); 

request(queryUrl, function(error, response, data){

    if (!error && response.statusCode===200){
        console.log(response.statusCode);
        console.log("++++++++++++"); 
        console.log(data);
        console.log("++++++++++++");        
        console.log(JSON.stringify(data));
        console.log("++++++++++++");
        console.log(JSON.parse(data));
        console.log("++++++++++++");
        console.log(JSON.parse(data).Title);
        console.log(JSON.parse(data).Year);      
    } else {
        return console.log(error);
    }

});
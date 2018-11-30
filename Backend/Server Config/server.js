// Require/import the HTTP module
var http = require("http");
var request = require("request");

// Define a port to listen for incoming requests
var PORT = 8080;
var PORT1 = 7000;
var PORT2 = 7500;

// Set what to do when a request is recieved
var server = http.createServer(function(req, res){
  res.end("Server Message");
});

var serverOne = http.createServer(function(req, res){
  res.end("Server One Message");
});

var serverTwo = http.createServer(function(req, res){
  res.end("Server Two Message");
});

// Turn the servers on
server.listen(PORT, function(){
    // Adds an API request for this port 
    request("https://omdbapi.com?apikey=trilogy&t=american+psycho", function(err, status, result) {
        if (err) throw err;
        res.end(result); 
      });
    console.log("Server listening on: http://localhost:" + PORT);
});

serverOne.listen(PORT1, function(){
    console.log("You Are On Port One On: http://localhost:" + PORT1);
});

serverTwo.listen(PORT2, function(){
    console.log("You Are On Port Two On: http://localhost:" + PORT2);
});



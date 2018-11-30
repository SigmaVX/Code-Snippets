require('dotenv').config();
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.SQL_KEY,
  database: process.env.SQL_DB
});

// Store user sort options 
var options=["Database Stats","Find Songs By Artist", "Find Artists With 20+ Songs In Top 5000", "Find Songs By Date Range", "Search For Song", "Find First Year David Bowie Hits"];

function start(){
  inquirer.prompt([{
      name: 'selectTask',
      message: 'Select What You Want To Do',
      type: 'list',
      choices: options
    }
  ]).then(function(action) {
    
      // Run Switch Case To Trigger A Function
      switch (action.selectTask) {
        case "Database Stats":
            dbStats();
            break;
        case "Find Songs By Artist":
            findArtist();
            break;
        case "Find Artists With 20+ Songs In Top 5000":
            multiArtist();
            break;
        case "Find Songs By Date Range":
            findByYears();
            break;
        case "Search For Song":
            searchArtist();
            break;
        case "Find First Year David Bowie Hits":
            findDavidBowie();
            break;
    }
  });
}

// Looks Up DB Stats
function dbStats(){
  console.log("\n\nStats From The Top 5000 Songs (1920 - 2013)");
  console.log("_______________________________________________________________\n");

  var queryAVG = "SELECT AVG(raw_total) AS average FROM top_songsdb.top5000;";
  var queryAVG80 = "SELECT AVG(raw_total) AS average80 FROM top_songsdb.top5000 WHERE year BETWEEN 1980 AND 1989;";
  var querySUM = "SELECT SUM(raw_total) AS total FROM top_songsdb.top5000;";
  var querySUM80 = "SELECT SUM(raw_total) AS total80 FROM top_songsdb.top5000 WHERE year BETWEEN 1980 AND 1989;";
  var queryCOUNT = "SELECT COUNT(raw_total) FROM top_songsdb.top5000 WHERE year BETWEEN 1980 AND 1989;";
  

  connection.query(queryAVG, function(err, res) {
    if(err) throw err;
    queryAVG = res[0].average;
    console.log("The Average Rating On All Songs Is " + queryAVG);
  });

  connection.query(queryAVG80, function(err, res) {
    if(err) throw err;
    queryAVG80 = res[0].average80;
    console.log("The Average Rating On 80s Songs Is " + queryAVG80);
  });

  connection.query(querySUM, function(err, res) {
    if(err) throw err;
    querySUM = res[0].total;
  
      connection.query(querySUM80, function(err, res) {
        if(err) throw err;
        querySUM80 = res[0].total80;
        var percentage = (parseFloat(querySUM80)/parseFloat(querySUM))*100;
        console.log("80s Music Accounts For " + percentage +"% Of All Music Ratings!")
      });
  });

  // need help trying to export values outside the functions 
  console.log(queryAVG, queryAVG80, querySUM, querySUM80);
  // console.log("The Average Rating On All Songs Is " + res[0].AVG(raw_total));
  // console.log("While The Avergae Rating On 80s Songs Is " + res[0].AVG(raw_total));
};

// Finds all songs by artist
function findArtist() {

      inquirer.prompt([{
        name: 'enterArtist',
        message: 'Enter Artist Name: ',
        type: 'input',
        default: "David Bowie"
      }
    ]).then(function(action) {
      var querySQL = "SELECT * FROM top5000 WHERE artist ='"+action.enterArtist+"'";

      connection.query(querySQL, function(err, res) {
        if (err) throw err;
        for(var i =0; i<res.length; i++){
          console.log(res[i].artist + " - " + res[i].song + " - " + res[i].year + " - " + res[i].raw_total);
        };
        console.log("_______________________________________________________________\n");


        console.log("")
        start();
      });
    });
  }
  
// Search by song name
function searchArtist() {

  inquirer.prompt([{
    name: 'enterSong',
    message: 'Enter Song Name: ',
    type: 'input',
    default: "Dancing Queen"
  }
]).then(function(action) {
    connection.query("SELECT * FROM top5000 WHERE song ='"+action.enterSong+"'", function(err, res) {
      if (err) throw err;
      for(var i =0; i<res.length; i++){
        console.log(res[i].artist + " | " + res[i].song + " | " + res[i].year);
      };
      console.log("_______________________________________________________________\n");
      start();
    });
  });
};

// Find artists with multiple songs on the top 5000 
function multiArtist() {

  console.log("\n\nArtists With 20+ Songs In The Top 5000 (1920 - 2013)");
  console.log("_______________________________________________________________\n");

  connection.query("SELECT artist, COUNT(*) FROM top5000 GROUP BY artist HAVING COUNT(*) > 19", function(err, res) {
    if (err) throw err;
    for(var i =0; i<res.length; i++){
      console.log(res[i].artist);
    };
    console.log("_______________________________________________________________\n");
    start();
  });
}

// Find songs by a date range
function findByYears() {

  inquirer.prompt([{
    name: 'startYear',
    message: 'Enter Start Year: ',
    type: 'input',
    default: 1920
  },
  {
    name: 'endYear',
    message: 'Enter End Year: ',
    type: 'input',
    default: 2013
  }
]).then(function(action) {

    var start = action.startYear;
    var end = action.endYear;

    connection.query("SELECT * FROM top5000 WHERE year >='"+start+"' AND year <='"+end+"'", function(err, res) {
      if (err) throw err;
      for(var i =0; i<res.length; i++){
        console.log(res[i].artist + " | " + res[i].song + " | " + res[i].year);
      };
      console.log("_______________________________________________________________\n");
      // start not working from some reff error
      // start();
    });
  });
}


function findDavidBowie(){

var querySQL = "SELECT top5000.artist, top5000.song, top_albums.album, top5000.year FROM top5000 INNER JOIN top_albums ON (top5000.artist = top_albums.artist AND top5000.year = top_albums.year) WHERE (top5000.artist = 'David Bowie' AND top_albums.artist = 'David Bowie') ORDER BY top5000.year";

  connection.query(querySQL,function(err,res){
    if(err) throw err;
    console.log("\n Top David Bowie Songs Are:\n");
    // note the res comes back with data from both tables that you now reff with the field name
    for(var i =0; i<res.length; i++){
      console.log(res[i].album + " - " + res[i].song + " - " + res[i].year);
    };
    console.log("_______________________________________________________________\n");
    start();
  });
};

start();
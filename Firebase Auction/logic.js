
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAGkEkc-mF1CZKlPuED9HkzQHt3TLiP_64",
    authDomain: "test-activities.firebaseapp.com",
    databaseURL: "https://test-activities.firebaseio.com",
    projectId: "test-activities",
    storageBucket: "test-activities.appspot.com",
    messagingSenderId: "964997701233"
  };
  firebase.initializeApp(config);

// Build refference to the firebase database
var database = firebase.database();
var connectionsRef = database.ref("/users-live");

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;


// At the initial load and subsequent value changes this will get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref("auction").on("value", function(snapshot){

  // link the local var to the cloud database
  highPrice = parseInt(snapshot.val().topPrice);
  highBidder = snapshot.val().topBidder;

  // jQuery to display the updated info on html
  $("#highest-bidder").text(highBidder);
  $("#highest-price").text(highPrice);

  // log any errors
  // function(errorObject) {
  //   console.log('The read failed: ' + errorObject.code);
  // }

});

// On click for bid
$("#submit-bid").on("click", function(event){
  event.preventDefault();

  // stores value from html using jQuery
  var bidPrice = $("#bidder-price").val();
  var bidName = $("#bidder-name").val();

  if(bidPrice > highPrice){
    
    alert("You Now Have The High Bid");

    // Sets the cloud database using the local data collected
    database.ref("auction").set({
      topBidder: bidName,
      topPrice: parseInt(bidPrice)
    });

    console.log("high price " + highPrice);
    console.log("high bidder " + highBidder);
    } else {
      alert("Your Bid Is Too Low");
      }
});


// Logic For Number Of Watchers
database.ref('.info/connected').on("value", function (snapshot) {
  console.log(snapshot.val()); 

  // This tests if the user is connected since snapshot ref is just looking at the connection
  if (snapshot.val()) {

    // Adds the connection to a list of connections in the "connections" location.
    var con = connectionsRef.push("live");
    
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }

});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snapshot) {

  // Display the viewer count in the html using the number of 
  // online users is the number of children in the connections list.
  $("#watchers").text(snapshot.numChildren());
});














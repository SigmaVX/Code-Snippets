// Include both the geocoder and weather NPM packages
var geocoder = require("geocoder");
var weather = require("weather-js");

var city = "";
var state = "";
var zipcode = "";
var search = "";


// Take in the command line arguments
var address = process.argv.slice(2).join(" ");

geocoder.geocode(address, function(error, data ) {
  if(error){
    return console.log(error);
  }  else{
    // Select and store items from geo location NPM JSON
    // console.log(JSON.stringify(data, null, 2));
    // console.log(JSON.stringify(data.results[0].address_components[2].long_name, null, 2));
        zipcode = data.results[0].address_components[5].long_name;
        city = data.results[0].address_components[2].long_name;
        state = data.results[0].address_components[3].short_name;
        console.log(zipcode, city, state);
  }

    if(zipcode===""){
            search  = city + " " + state;
        } else {
            search = zipcode;
        }


    weather.find({search: search, degreeType: 'F'}, function(error, result){ 
        if(error){
            return console.log(error);
        } else {
            console.log(result);
        }    
    });

});

// if(zipcode===""){
//     weather.find({search: city+" "+state, degreeType: 'F'}, function(error, result){ 
//         if(error){
//             return console.log(error);
//         } else {
//             console.log(result)
//         }    
//     });
// } else{
//     weather.find({search: zipcode, degreeType: 'F'}, function(error, result){ 
//         if(error){
//             return console.log(error);
//         } else {
//             console.log(result)
//         }    
//     });
// }

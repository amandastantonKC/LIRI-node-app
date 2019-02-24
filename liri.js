require("dotenv").config();

//dependencies
var keys = require("./keys.js");
var request = require('request');
var fs = require('fs');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//variables to capture user inputs
var userOption = process.argv[2];
var inputParameter = process.argv[3];

userInputs(userOption, inputParameter);

function userInputs(userOption, inputParameter) {
    switch (userOption) {
        case 'concert-this':
            showConcertInfo(inputParameter);
            break;

        case ' spotify-this-song':
            showSongInfo(inputParameter);
            break;

        case 'do-what-it-says':
            showSomeInfo();
            break;

        default:

            console.log("invalid option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says");


    }
}

function showConcertInfo(inputParameter){
    var queryUrl = "https://rest.bandsintown.com/artists/" + inputParameter + "/events?app_id=codingbootcamp";
    request(queryUrl, function(error, response, body) {
    
        // If the request is successful
    if (!error && response.statusCode === 200) {
        var concerts = JSON.parse(body);
        for (var i = 0; i < concerts.length; i++) {  
            console.log(","); 
            fs.appendFileSync("log.txt", "\n");//Append in log.txt file
            console.log(i);
            fs.appendFileSync("log.txt", i + "\n");
            console.log("Name of the Venue: " + concerts[i].venue.name);
            fs.appendFileSync("log.txt", "Name of the Venue: " + concerts[i].venue.name+"\n");
            console.log("Venue Location: " +  concerts[i].venue.city);
            fs.appendFileSync("log.txt", "Venue Location: " +  concerts[i].venue.city+"\n");
            console.log("Date of the Event: " +  concerts[i].datetime);
            fs.appendFileSync("log.txt", "Date of the Event: " +  concerts[i].datetime+"\n");
            console.log("");
            fs.appendFileSync("log.txt", "" + "\n");
        }
    } else{
      console.log('Error');
    }
});}

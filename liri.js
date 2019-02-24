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

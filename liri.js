var keys = require("./keys.js");

var request = require ('request');
var twitter = require ('twitter');
var spotify = require ('node-spotify-api');
var fs = require ('fs');
var client = new twitter (keys.Twitter.keys);
var input = process.argv;
var action = input[2];
var inputs = input[3];

var express = require('express');

var app = express();
var router = express.Router();

// Constants
var PORT = 8080;

// find text in {} and extract it to array
function getPlaceholders(str){
var regex = /\{(\w+)\}/g;
    var result = [];

    while (match = regex.exec(str))
    {
        result.push(match[1]);    
    }

    return result;
}

//console.log(getPlaceholders("A new pet has been added to {name1} household. Welcom {name2}!"));

 
function replaceString(str){
var regex = /\{(\w+)\}/g;
    var result = [];

    while (match = regex.exec(str))
    {
		console.log(match[0]);
		str = str.replace(match[0], ' ');    
    }

    return str;
}

console.log(replaceString("A new pet has been added to {name1} household. Welcom {name2}!"));

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);





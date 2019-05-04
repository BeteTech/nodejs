/// <reference path="./typings/globals/node/index.d.ts" />

var ok = require('./ok');

var fs = require('fs');

fs.readFile("C:/Users/Administrator/Desktop/temp.txt", function (err, data) {
    if (err) {
        throw err
    }
    console.log(data.toString());
});
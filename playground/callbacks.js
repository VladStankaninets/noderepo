// https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm
var fs = require('fs');

// // fs.readFile('input.txt', function (err, data) {
// //     if (err) return console.error(err);
// //     console.log(data.toString());
// // });
//
// console.log('Program Ended');

// http://stackabuse.com/avoiding-callback-hell-in-node-js/
// Chaining callbacks

var myFile = 'input.txt';
fs.readFile(myFile, 'utf8', function appendText (RDerr, txt) {
    if (RDerr) return console.log(`From appendText function: There is a problem reading from ${myFile} \n\n${RDerr}`);
    else {
        var txtnew = `${txt} \nAppended something!`;
        fs.writeFile(myFile, txtnew, function notifyUser (WRerr) {
            if (WRerr) return console.log(`From notifyUser function: There is a problem with writing in ${myFile} \n\n${WRerr}`);
            // console.log('Appended text!');
            console.log(`This is the new ${myFile} text: \n\n${txtnew}`);
        });
    }
});

// Declare your functions beforehand

// var fs = require('fs');

// var myFile = 'input.txt';
//
// var notifyUser = function notifyUser (err, txtnew) {
//     if (err) return console.log(err);
//     // else
//     console.log(`This is the new input.txt text: ${txtnew}`);
// };
//
//
// var appendText = function appendText (err, txt) {
//     if (err) return console.log(err);
//     // else
//     var txtnew = `${txt}  \nAppended something!`;
//     fs.writeFile(myFile, txtnew, notifyUser);
// };
//
//
// fs.readFile(myFile, 'utf8', appendText);

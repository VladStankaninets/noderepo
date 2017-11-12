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
fs.readFile(myFile, 'utf8', function ReadAppendText (READerr, filecontent) {
    if (READerr) return console.log(`From ReadAppendText callback function: There is a problem reading from ${myFile} \n\n${READerr}`);
    else {
        var filecontentnew = `${filecontent} \nAppended something!`;
        fs.writeFile(myFile, filecontentnew, function WriteNotifyUser (WRITEerr) {
            if (WRITEerr) return console.log(`From ReadNotifyUser callback function: There is a problem with writing in ${myFile} \n\n${WRITEerr}`);
            // console.log('Appended text!');
            console.log(`This is the new ${myFile} content: \n\n${filecontentnew}`);
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

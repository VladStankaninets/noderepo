// https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm
var fs = require('fs');

fs.readFile('input.txt', function callback (err, data) {
    if (err) return console.error(err);
    // else
    setTimeout(function callback2 () {
    // setTimeout must have a callback function as its first agrumnet, so using callback2 function as a wrapper for console.log. Quicker just to use an arrow function below
        console.log(data.toString());
        console.log('Regular function Ended');
    }, 10000);

    // console.log('Regular function Ended');
});


fs.readFile('input.txt', function callback (err, data) {
    if (err) return console.error(err);
    // else
    setTimeout(() => {
        console.log(data.toString());
        console.log('Arrow function Ended');
    }, 3000);

    // console.log('Arrow function Ended');
});


console.log('Overall Program Ended');


// http://stackabuse.com/avoiding-callback-hell-in-node-js/
// Chaining callbacks

// var myFile = 'input.txt';
// fs.readFile(myFile, 'utf8', function ReadAppendText (READerr, filecontent) {
//     if (READerr) return console.log(`From ReadAppendText callback function: There is a problem reading from ${myFile} \n\n${READerr}`);
//     else {
//         var filecontentnew = `${filecontent} \nAppended something!`;
//         fs.writeFile(myFile, filecontentnew, function WriteNotifyUser (WRITEerr) {
//             if (WRITEerr) return console.log(`From ReadNotifyUser callback function: There is a problem with writing in ${myFile} \n\n${WRITEerr}`);
//             // console.log('Appended text!');
//             console.log(`This is the new ${myFile} text: \n\n${filecontentnew}`);
//         });
//     }
// });

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

// var obj = {
//   name : 'Vlad'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof obj);
// console.log(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Vlad", "age": 46}';
// var personObject = JSON.parse(personString);
// console.log(typeof personObject);
// console.log(personObject);
// console.log(personObject.name);
// console.log(personObject.age);

const fs = require("fs");

var originalNote = {
<<<<<<< HEAD
    'title': 'Some title',
    'body': 'Some body'
=======
	title: "Some title",
	body: "Some body"
>>>>>>> 9f4384471092fe908418813d90b9dd678c270c44
};

// creating a string from the JavaScript object above
var originalNoteString = JSON.stringify(originalNote);

//write originalNoteString as the file notes.json to the FileSystem
fs.writeFileSync("notes.json", originalNoteString);

// now read from the file notes.json into the temp string var
var noteString = fs.readFileSync("notes.json");

// now convert noteString string into a Javascript object
var noteObject = JSON.parse(noteString);
console.log(typeof noteObject);
console.log(noteObject);
console.log(noteObject.title);
console.log(noteObject.body);
// This is June 30, 2017

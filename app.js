
console.log('This is the app.js file');

const func = require('./functions.js');
const func2 = require('./functions2.js');
const _ = require('lodash');


console.log(func.myFunc1(2, 3));
console.log(func.myFunc2(3, 3));
console.log(func.myFunc3(15, 16));
console.log(func.myName);
console.log(func.myObject.sayHi());
console.log(func.helloNow());
console.log(func2.TryThisConst);
console.log(func2.sayHelloInEnglish());
console.log(func2.sayHelloInSpanish());

var StringCheck1 = 'See if it is a string';
var StringCheck2 = 21;
console.log(_.isString(StringCheck1));
console.log(_.isString(StringCheck2));

// var myArray= ['vlad', 'vlad', 'andrew', 1, 1, 6, 7, 7, 2, 3, 3, 3, 3, 4, 4, 4, 5];
// console.log('My Array ', myArray);
// myArray.sort();
// console.log('My Sorted Array ', myArray);
// console.log('My Sorted Unique Array', _.sortedUniq(myArray));

var myArray = ['vlad', 'vlad', 'andrew', 1, 1, 6, 7, 7, 2, 3, 3, 3, 3, 4, 4, 4, 5, 999];
console.log('My Array: ', myArray);
console.log('My Sorted AND Unique Array: ', _.sortedUniq(myArray.sort()));
myArray.push('apple');
console.log('My Array: ', myArray);
myArray.pop();
console.log('My Array: ', myArray);

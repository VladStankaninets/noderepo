const _ = require('lodash');

var myArray = [1, 2, 4, 8, 1, 17, 'vlad', 'vlad', 'andrew', 'moby dick'];
var myString = 'This is a String';
console.log(`Checking if this an Array using lodash: ${_.isArray(myArray)}`);
console.log(`Checking if this an Array using lodash: ${_.isArray(myString)}`);

console.log(`Checking the index of element vlad in myArray using lodash: ${_.indexOf(myArray, 'vlad')}`);
var doubles = _.map(myArray, (x) => `${x * 2} Add this`);

// var doubles = myArray.map(function(x) {
//
//     return x * 2;
//
// });

_.forEach(myArray, (elem) => console.log(_.upperCase(elem)));
var numbers = _.filter(myArray, (elem) => typeof elem === 'number');
var strings = _.filter(myArray, (elem) => typeof elem === 'string');
console.log(myArray);
console.log(doubles);
console.log(_.uniq(numbers));
console.log(_.uniq(strings));

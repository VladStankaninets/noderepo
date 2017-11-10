

console.log('This is the functions.js file');

var myName = 'Vladimir';


// ES5
const myFunc1 = function myFunc1 (a, b) {

    return a + b;

};

// // ES6
const myFunc2 = (a, b) => a + b;

// ES6 - one more arrow function with mutiple arguments, but more just one statement, requires curly braces and return
const myFunc3 = (a, b) => {

    console.log('callig myFunc3 function');

    return a + b;

};

// Only works with one line (statement). See function myFunc3 above - do not forget curly barces and return with more than one statement.
const helloNow = () => 'This is an a one-liner arrow function with implicit return';

const myObject = {

    'Name': 'Vlad',

    'sayHi': function sayHi () {

        // Or you can write the following to get this.Name bound (can NOT use arrow functions if you need 'this.***' bound)
        // sayHi () {
        // console.log('Hi, ' + this.Name); old way to concatenate, es6 uses templating with `Hi ${this.Name}`
        // }

        return `Hi ${this.Name}`;

    }
};

// myObject.sayHi();

module.exports = {

    helloNow,
    myFunc1,
    myFunc2,
    myFunc3,
    myName,
    myObject

};

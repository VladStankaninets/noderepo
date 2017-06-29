console.log('This is the functions.js file');

//ES5
module.exports.myFunc1 = function (a, b) {
	return a+b;
};

//ES6
module.exports.myFunc2 = (a, b) => a+b;

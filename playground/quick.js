var myArr = [];
console.log(typeof myArr);
console.log(myArr instanceof Array);
console.log(myArr.__proto__ === Array.prototype);
console.log(myArr.__proto__.__proto__ === Object.prototype);
console.log(Array.__proto__.__proto__ === Object.prototype); // 

var mFunc = function () {};
console.log(typeof mFunc);

var mString = new String('A');
console.log(typeof mString);

var myString = 'A';
console.log(typeof myString);

console.log(mString == myString);
console.log(mString === myString);

console.log(mString instanceof String);
console.log(mString instanceof Object);
console.log(mString.__proto__ === String.prototype);
console.log(mString.__proto__.__proto__ === Object.prototype);

//console.log(Object.prototype === String.__proto__.__proto__);

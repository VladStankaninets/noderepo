const myMap = function myMap (array, callback) {

    console.log('Original array comes into the myMap function', array);
    return callback(array);

};


const addTwo = function addTwo (array) {

    console.log('Original array is passed into the addTwo callback function', array);

    var newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + 2);
    }
    console.log('New array is built by addTwo callback function, returning it to the calling myMap function', newArray);
    return newArray;
};


const multiplyByTwo = function multiplyByTwo (array) {

    console.log('Original array is passed into the multiplyByTwo callback function', array);

    var newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    console.log('New array is built by multiplyByTwo callback function, returning it to the calling myMap function', newArray);
    return newArray;
};


const OrigArray = [1, 5, 7];
let result = myMap(OrigArray, addTwo);
console.log('This is the result upon the myMap function call', result);
// Now let's double the members
result = myMap(OrigArray, multiplyByTwo);
console.log('This is the result upon the myMap function call', result);

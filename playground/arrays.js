const _ = require('lodash');

var myArray = [1, 2, 4, 8, 1, 17, 'vlad', 'vlad', 'andrew', 'moby dick'];
var myString = 'This is a String';
console.log(`Checking if this an Array using lodash: ${_.isArray(myArray)}`);
console.log(`Checking if this an Array using lodash: ${_.isArray(myString)}`);

console.log(`Checking the index of element vlad in myArray using lodash: ${_.indexOf(myArray, 'vlad')}`);
var map2upper = _.map(myArray, (x) => _.upperCase(x));
var map2doubles = _.map(myArray, (x) => `${x * 2} Original Element x 2`);
// var doubles = myArray.map(function(x) {
//
//     return x * 2;
//
// });

var FilteredNumbers = _.filter(myArray, (elem) => typeof elem === 'number');
var FilteredStrings = _.filter(myArray, (elem) => typeof elem === 'string');

console.log(myArray);
console.log(map2upper);
// See explanation on difference between map and foreach below
_.forEach(myArray, (elem) => console.log(_.upperCase(elem)));
console.log(map2doubles);
console.log(_.uniq(FilteredNumbers));
console.log(_.uniq(FilteredStrings));

// The important difference between MAP and FOREACH is that map accumulates all of the results into a collection, whereas foreach returns nothing.
// Map is usually used when you want to transform a collection of elements with a function, whereas foreach simply executes an action for each element.

// ********************************************************************************************************************************************************

// In short, foreach is for applying an operation on each element of a collection of elements, whereas map is for transforming one collection into another.
//
// There are two significant differences between foreach and map.
//
// 1.
// foreach has no conceptual restrictions on the operation it applies, other than perhaps accept an element as argument.
// That is, the operation may do nothing, may have a side-effect, may return a value or may not return a value.
// All foreach cares about is to iterate over a collection of elements, and apply the operation on each element.
//
// map, on the other hand, does have a restriction on the operation: it expects the operation to return an element, and probably also accept an element as argument.
// The map operation iterates over a collection of elements, applying the operation on each element, and finally storing the result of each invocation of the operation
// into another collection. In other words, the  map transforms one collection into another.
//
// 2.
// foreach works with a single collection of elements. This is the input collection.
//
// map works with two collections of elements: the input collection and the output collection.
// It is not a mistake to relate the two algorithms: in fact, you may view the two hierarchically, where map is a specialization of foreach.
// That is, you could use foreach and have the operation transform its argument and insert it into another collection.
// So, the foreach algorithm is an abstraction, a generalization, of the map algorithm.
// In fact, because foreach has no restriction on its operation we can safely say that foreach is the simplest looping mechanism out there, and it can do anything a loop can do.
// map, as well as other more specialized algorithms, is there for expressiveness: if you wish to map (or transform) one collection into another, your intention is clearer if
// you use map than if you use foreach.
//
// We can extend this discussion further, and consider the copy algorithm: a loop which clones a collection.
// This algorithm too is a specialization of the foreach algorithm. You could define an operation that, given an element, will insert that same element into another collection.
// If you use foreach with that operation you in effect performed the copy algorithm, albeit with reduced clarity, expressiveness or explicitness.
// Let's take it even further: We can say that map is a specialization of copy, itself a specialization of foreach. map may change any of the elements it iterates over.
// If  map doesn't change any of the elements then it merely copied the elements, and using copy would express the intent more clearly.

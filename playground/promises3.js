// new library fs-extra supporting promises

const fse = require('fs-extra');

// fse.readFile('input.txt')
//     .then((response) => {
//         var response2 = `${response} \nAdded THIS!`;
//         console.log('\nSuccessful Read!\n', response.toString());
//         return response2;
//     })
//     .then((response2) => console.log('\nSuccessful read in the CHAINED promise!\n', response2.toString()))
//     .then(null, (err) => console.error(err));

// http://www.datchley.name/es6-promises/
// You should use .catch() for handling errors, rather than .then(null, fn).
// Using .catch() is more explicit and idiomatic;
// and when chaining you can have a single .catch() at the end of the chain
// to handle any rejection or thrown exceptions from either the original promise or any of it's handlers.


fse.readFile('input.txt')
    .then((response) => {
        var response2 = `${response} \nAdded THIS!`;
        console.log('\nSuccessful Read!\n', response.toString());
        return response2;
    })
    .then((response2) => console.log('\nSuccessful read in the CHAINED promise!\n', response2.toString()))
    .catch((err) => console.error(err));

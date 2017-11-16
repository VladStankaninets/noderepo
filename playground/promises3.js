// new library fs-extra supporting promises
const fse = require('fs-extra');

fse.readFile('input.txt')
    .then((response) => {
        var response2 = `${response} \nAdded THIS!`;
        console.log('\nSuccessful Read!\n', response.toString());
        return response2;
    })
    .then((response2) => console.log('\nSuccessful read in the CHAINED promise!\n', response2.toString()))
    .catch((err) => console.error(err))

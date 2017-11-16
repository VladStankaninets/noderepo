var fs = require('fs');

var mySyncReadFile = function mySyncReadFile (filename) {
    return new Promise((resolve, reject) => {
        // resolve(fs.readFileSync(filename, 'utf8'));
        resolve(fs.readFileSync(filename).toString());
        reject(new Error('Unable to read the file input.txt'));
    });
};


mySyncReadFile('input.txt').then((res) => {
    console.log('Result: ', res);
}, (errorMessage) => {
    console.log(errorMessage);
});

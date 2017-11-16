var myPromise = new Promise(function callback (resolve, reject) {
    setTimeout(() => {
        resolve('Hey, it worked');
        reject('Can not fulfill the promise');
    }, 3000);

// can only pass ONE argument to both resolve or reject.
// If need multiple pieces of info - resolve or reject an object with multiple properties set on

});

// With promises there are TWO functions .then - for resolve and reject.
// Unlike callbacks with just one and ARGUMENTS resposible for determening an outcome function callback (err, data)


myPromise.then((Successoutcome) => {
    console.log('Success: ', Successoutcome);
}, (Erroroutcome) => {
    console.log('Error: ', Erroroutcome);
});

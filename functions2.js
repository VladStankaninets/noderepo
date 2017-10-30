console.log('This is the functions2.js file');

const TryThisConst = 5;

module.exports = {

    TryThisConst,

    sayHelloInEnglish () {

        return 'Hello';

    },

    sayHelloInSpanish () {

        return 'Hola';

    }

};


// or old way,  works ok, but eslint complaints

// console.log('This is the functions2.js file');
//
// const TryThisConst = 5;
//
// module.exports = {
//   sayHelloInEnglish: function() {
//     return "Hello";
//   },
//
// sayHelloInSpanish: function() {
//     return "Hola";
//   },
//
//   TryThisConst: TryThisConst
//
// };

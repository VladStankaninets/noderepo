const yargs = require('yargs').usage('Usage: $0 --command [str]')
    .example('node $0 --command=[list,add,delete] book records').demand(['command']).argv;

// console.log(yargs);
// console.log(yargs._);

if (yargs.command === 'add') {

    console.log('This is an ADD command');

} else {

    console.log('The has been an error');

}

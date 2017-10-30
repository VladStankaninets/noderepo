const yargs = require('yargs')
    .usage('Usage: node $0 --action[str]==[list,add,delete] --title[str]=book name')
    .demand(['action', 'title']).argv;

console.log(yargs);
// console.log(yargs._);
// console.log(yargs._[0]);
// const check = yargs.title;
console.log('Title is', typeof yargs.title);

if (yargs.action === 'add' && !!yargs.title && yargs.title !== true) {

    console.log('This is an ADD action | the Book name: ', yargs.title);

} else if (yargs.action === 'list' && !!yargs.title && yargs.title !== true) {

    console.log('The is a LIST action | The Book name: ', yargs.title);

} else if (yargs.action === 'delete' && !!yargs.title && yargs.title !== true) {

    console.log('This is a DELETE action |The Book name: ', yargs.title);

} else {

    console.log('There has been an error');

}

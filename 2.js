let str = ' ';
let zvezda = '*';
const prompt = require('prompt-sync')();

 
let height = prompt('height: ');
let j = height - 1;
for ( let i = 1; i <= height; i++) {
    str = '';
    while ( j !== 0) {
        str += ' ';
        j--;
    }
    j = height - i - 1;
    console.log(str + zvezda + str);
    zvezda += '**';
}
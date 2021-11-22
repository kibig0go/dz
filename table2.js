const prompt = require('prompt-sync')();
 
let height = prompt('height: ');
let width = prompt('width: ');
let table = [];
let element = {};
table.length = width;

for (let i = 1; i <= height; i++) {
    for (let j = 0; j < width; j++) {
        element = {
            x: j + 1,
            y: i,
            
        }
        table[j] = element;
    } 
    console.log(table);
}

// for ( let i = 0; i < height*width; i++) {
    
// }

// for ( let i = 1; i <= height; i++) {
//     for ( let j = 1; j <= width; j++) {
//         table[i] = {
//             x: i,
//             y: j,
//         }
//         console.log(table);
//     }
    
//     table = [];
// }
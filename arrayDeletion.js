
let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'];

// remove the last element of the colors

/* using pop()

 const colorRemoved = colors.pop();
 console.log(colorRemoved)
 console.log(colors)
*/

/* manually

const colorRemoved = colors[colors.length - 1]
console.log(colorRemoved)
colors.length = colors.length - 1;
console.log(colors)
*/

// remove the first element of the colors

/* using shift()

const colorRemoved = colors.shift();
console.log(colorRemoved);
console.log( colors)
*/

/* manually

const colorRemoved = colors[0];
console.log(colorRemoved)
for(let i = 0; i < colors.length - 1; i++){
    colors[i] = colors[i + 1]
   
  
}
colors.length = colors.length - 1
console.log(colors)
*/

// remove a random element of the colors


/*
const colorRemoved = 2;
console.log(colors[colorRemoved])

for(let i = colorRemoved; i < colors.length - 1; i++){
    colors[i] = colors[i + 1]
}
colors.length = colors.length - 1
console.log(colors)

*/


// Manually remove 'Purple' and create a new array

/*
const newColors = []
for(let i = 0; i < colors.length; i++){
    if(colors[i] !== 'Purple'){
        newColors.push(colors[i])
    }
}
console.log(newColors)
*/
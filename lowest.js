// find the lowest number in the array bellow:

const heights2 = [167, 190, 120, 165, 137];

let lowest = heights2[0];
for(let i = 0; i < heights2.length; i++){
  if(!(lowest < heights2[i]))
    lowest = heights2[i]
}
console.log(`my lowest value is ${lowest}`)
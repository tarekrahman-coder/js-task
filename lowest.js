// find the lowest number in the array bellow:

const numbers = [167, 190, 120, 165, 137];

let lowest = numbers[0];
for(let i = 1; i < numbers.length; i++){
  (numbers[i] < lowest) && (lowest = numbers[i])
  
}
console.log(`my lowest value is ${lowest}`)
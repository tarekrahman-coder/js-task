const fruits = ["apple", "banana", "Orange", 'lemon'];

let position = 2;
let newFruits = "watermelon"

for(let i = fruits.length; i > position; i--){
    fruits[i] = fruits[i - 1]
   
}

fruits[position] = newFruits;
// console.log(fruits)



let numbers = [10, 20, 30, 40, 50];
const pos = 2;  
const newNumber = 25;

for(let i = numbers.length; i > pos; i--){
    numbers[i] = numbers[i - 1]
}
numbers[pos] = newNumber;
console.log(numbers);



let letters = ['A', 'B', 'C', 'D', 'E'];

let pos1 = 2;
let pos2 = 3;

for(let i = letters.length; i > pos1; i--){
    letters[i] = letters[i - 1]
}
letters[pos1] = 'X'

for(let i = letters.length; i > pos2; i--){
    letters[i] = letters[i - 1]
}
letters[pos2] = 'Y'

letters.push('Z')
console.log(letters); 

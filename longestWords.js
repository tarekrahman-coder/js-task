const word = 'I am learning Programming to become a programmer';
const arr = word.split(' ');

let longestWord = arr[0]
for(let i = 1; i < arr.length; i++){
    if( arr[i].length > longestWord.length){
        longestWord = arr[i]
    }
}
console.log(longestWord)
const numbers = [25, 11, 68, 92, 12, 69, 78, 7, 23, 95, 85, 28, 41, 62];

let max = numbers[0]
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < max){
        max = numbers[i]
    }
}
console.log(max)
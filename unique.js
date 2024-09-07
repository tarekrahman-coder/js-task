const numbers = [5,6,11,12,98,5, 12, 15, 5, 12];

const arr = []
let count = 0;

for(let i = 0; i < numbers.length; i++){

    let isUnique = true;
    for(let j = 0; j < arr.length; j++){
        if(numbers[i] == arr[j]){ 
            isUnique = false;
            break;
         }
        
    }
    if(isUnique){
        arr.push(numbers[i])
    }
}
console.log(arr)

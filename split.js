const words = 'I am learning Programming to become a programmer';
const newArr = []
let text = '';

for(let i = 0; i <= words.length; i++){
    if (words[i] == ' '){
    newArr.push(text)
    text = '';
    continue
    }
    else if(i == words.length){
        newArr.push(text)
    }

    else{ text += words[i]}   
   }

console.log(newArr)
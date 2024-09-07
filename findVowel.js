const text = 'HellO wOrld';
const lowerText = text.toLowerCase() 
function countVowels(str){
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
            count++
    }

    return count;
}

console.log(countVowels(lowerText))



// using regExr:
const str = 'HellO wOrld'

function findTotolVowel(str){

    const regex = /[aeiouAEIOU]/g
    const findVowel = str.match(regex);
    return findVowel ? findVowel.length : 0
}
 
console.log(findTotolVowel(str))

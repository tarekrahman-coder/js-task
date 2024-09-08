function checkName(name){
    const lastLetter = name[name.length - 1];

    const letters = ['a', 'y', 'e', 'i', 'o', 'u', 'w'];

    let isFound = false;
    for(let i = 0; i < letters.length; i++){
        letters[i] === lastLetter &&  (isFound = true)  
    }
    return isFound ? 'Good Name' : 'Bad Name';
//     const regex = /[aeiouw]/g;

//    if(lastLetter.match(regex)){
//     return 'good name'
//    }else{
//     return 'bad name'
//    }

}

console.log(checkName('july'))
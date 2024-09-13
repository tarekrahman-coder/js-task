const str = 'My name is tarek';
const arr = []
for(let i = 0; i < str.length; i++){
    if(str[i] == 'k'){
       
        str[i] = 'q'
        arr.push(str[i])
    }
}

console.log(str.indexOf('k'))
let a = str[15] = 'q';
console.log(str, a)
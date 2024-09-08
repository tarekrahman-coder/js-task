const str = ['Rehan', 'Hasan', 'Rehan', 'jahid', 'jihad', 'Jahid'];
const newArr = []
const names = str.join(' ').toLowerCase().split(' ');

for(let i = 0; i < names.length; i++){

    let isUnique = true;
    for(j = 0; j < newArr.length; j++){
        if(names[i] === newArr[j]){
            isUnique = false;
            break;
        }
    }
    if(isUnique){
        newArr.push(names[i])
    }
}
console.log(newArr)
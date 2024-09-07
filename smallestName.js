// // Find the friend with the smallest name.

// const friendsName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// let smallestFriendName = friendsName[0];

// for(let i = 1; i < friendsName.length; i++){

//     if(!(smallestFriendName.length < friendsName[i].length))
//         smallestFriendName = friendsName[i]
// }
// console.log(smallestFriendName)

const friendsName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let smallestName = friendsName[0];

for(let i = 1; i < friendsName.length; i++){

    (friendsName[i].length < smallestName.length) && (smallestName = friendsName[i])
    
}
console.log(smallestName)
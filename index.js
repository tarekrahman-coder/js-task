function calculateTax(income, expenses){
    if(income < 0 || expenses < 0 || income < expenses) return 'Invalid Input';

    return (income - expenses) * .20
}


function sendNotification(email){
    let username = ''
    let domainName = ''
    let atTheRate = false;

    for(let i = 0; i < email.length; i++){

        if(email[i] === '@'){
            atTheRate = true
        }else if(!atTheRate){
            username += email[i]
        }else{
            domainName += email[i]
        }
    }

    const notificationMessage = username + " " + 'sent you an email from' + " " + domainName;
    return atTheRate ? notificationMessage : 'Invaild Email'
}


function checkDigitsInName(name){
    if(typeof name != 'string') return 'Invalid Input'

    let isNumber = false;
    for(let i = 0; i < name.length; i++){
        if(!isNaN(name[i])) isNumber = true; 
    }
    return isNumber
}


function calculateFinalScore(obj){
    if(typeof obj !== 'object') return 'Invalid Input';

    let score = 0;
    for(let prop in obj){
        if(typeof obj[prop] == 'number'){
            score += obj[prop];
        }
        else if(obj[prop] === true){
            score += 20;
        }
      
    }
   
    return score >= 80;
}


function waitingTime(waitingTimes, serialNumber){
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') return 'Invalid Input'

    let time = 0
    for(let i = 0; i < waitingTimes.length; i++){
        time += waitingTimes[i]
    }
    const avgTime = Math.round(time / waitingTimes.length);
    const remainingCandidate = (serialNumber - 1) - waitingTimes.length
    return avgTime * remainingCandidate;
}
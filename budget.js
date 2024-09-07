const laptop = 35000, tablet = 15000, mobile = 20000;

function calculateElectronicsBudget(a, b, c){
    return a + b + c
}

// console.log(calculateElectronicsBudget(laptop, tablet, mobile));

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    
    let sum = 0;
  for(let i = 0; i < phones.length; i++){
    sum += phones[i].price
  }

  return sum / phones.length;
  
}

console.log(findAveragePhonePrice(phones))
function atmValidation(cardNumber){
  
if (!Array.isArray(cardNumber) || cardNumber.length === 0) {
return { valid: false, message: "Invalid card number" };
}

const cardTypes = {
    Visa: { firstDigit: 4, length: 16 },
    MasterCard: { firstDigit: 5, length: 16 },
    Discover: { firstDigit: 6, length: 16 },
    AmericanExpress: { firstDigit: 3, length: 15 }
};

const firstDigit = cardNumber[0];

for (const [issuer, { firstDigit: validFirstDigit, length }] of Object.entries(cardTypes)) {
if (firstDigit === validFirstDigit) {

if (cardNumber.length === length) {
return{ valid: true, message: issuer };
}else{
return { valid: false, message: `Invalid Length` };
}
}
}

  
return{ valid: false, message: "Invalid Issuer" };
}


console.log("Here is my MasterCard number:", atmValidation([5, 5, 6, 2, 4, 5, 7, 8, 9, 2, 1, 4, 5, 6, 7, 5, 2, 9]));
console.log("Here is my Discover card number:", atmValidation([6, 5, 6, 2, 4, 5, 7, 8, 9, 2, 1, 4, 5, 6, 9, 7]));
console.log("Here is my American Express card number:", atmValidation([3, 5, 6, 2, 4, 5, 7, 8, 9, 2, 1, 4, 5, 6, 7]));

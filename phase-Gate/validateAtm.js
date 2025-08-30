function validateAtm(cardIssuer){

cardIssuer = ["Visa", "MasterCard", "Discovery", "AmercicanExpress"];

const visaCardNumber = [4,1,5,8,3,1,9,7,4,2,5,2,1,5,6,7]
if (cardIssuer[0] = "Visa" && visaCardNumber[0] == 4){
result = true, "Visa";
return result
}
if(cardIssuer[0] < visaCardNumber.length){
}
result = false, "Invalid Length";
return result

const masterCardNumber = [5,5,7,3,5,1,4,5,6,2,1,6,2,5,1]
if (cardIssuer[0] = "MasterCard" && visaCardNumber[0] == 5){
result = true, "Mastercard"; 
return result
}
if(cardIssuer[0] < masterCardNumber.length){
}
result = false, "Invalid Length";
return result;


const discoveryCardNumber = [6,1,5,8,3,1,9,7,4,2,3,6,1,2,7,9]
if (cardIssuer[0] = "Discovery" && discoveryCardNumber[0] == 6){
result = true, Discovery; 
return result
}
if(cardIssuer[0] < discoveryCardNumber.length){
}
result = false, "Inavlid length";
return result

const americanExpressCardNumber = [3,1,5,8,3,1,9,7,4,2,5,2,1,4,6]
if (cardIssuer[0] = "AmercicanExpress" && americanExpressCardNumber[0] == 3){
result = true, "American Express";
return result
}
if(cardIssuer[0] < americanCardNumber.length){
}
result = false, "Invalid length"; 
return result
}


console.log("here is my Visa card number:", validateAtm([4,5,6,2,4,5,7,8,9,2,1,4,5,6,7,7]));
console.log("here is my Mastercard number:", validateAtm([5,5,6,2,4,5,7,8,9,2,1,4,5,6,7,5,2,9]));
console.log("here is my Discovery card number:", validateAtm([6,5,6,2,4,5,7,8,9,2,1,4,5,6,9,7]));
console.log("here is my American Express card number:", validateAtm([3,5,6,2,4,5,7,8,9,2,1,4,5,6,7]));




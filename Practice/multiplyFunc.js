
let numberOne = 5;
let numberTwo = 9;
function getAnswer(number, secondNumber){
  let numberThree = 8;
  function multiply(){
    let result = secondNumber * number * numberThree
    return result
}
  return multiply()
}
console.log(getAnswer(numberOne, numberTwo));

/*
let numberOne = 5;
function getAnswer(number){
  let secondNumber = 8;
  function multiply(){
    let result = secondNumber * number
    return result
}
  return multiply(number)
}
console.log(getAnswer(numberOne));
*/
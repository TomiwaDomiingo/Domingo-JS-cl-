function sumOfNumbers(number) {
  // Convert the number to a string to iterate through digits
const numStr = number.toString();
let sum = 0;

  // Iterate through each character (digit) in the string
for (let i = 0; i < numStr.length; i++) {
    // Convert the character to an integer and add to the sum
sum += parseInt(numStr[i]);
}
  return sum;
}

function getUserInput()
let
userInput = prompt("Please enter a number between 1 and 10,000:");
if (userInput === null) {
      return null; // User cancelled the input
}


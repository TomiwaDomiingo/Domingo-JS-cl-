const prompt = require('prompt-sync')();

function subtractQuestions(question, score) {
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
let minuend = Math.max(num1, num2);
let subtrahend = Math.min(num1, num2);
let answer = minuend - subtrahend;
let userAttempt = 2;
console.log(`Question ${question}: ${minuend} - ${subtrahend} =`);
while (userAttempt > 0) {
let userResult = Number(prompt('What is your answer: '));
if (isNaN(userResult)) {
console.log('Enter a number.');
userAttempt--;
if (userAttempt > 0) console.log('You have one try left');
continue;
}
if (userResult == answer){
console.log('You are correct');
return score + 1;
} else {
userAttempt--;
if (userAttempt > 0) console.log('You have one try left');
else console.log(`You are incorrect, the answer is ${answer}`);
}
}
return score;
}

function runMathQuiz() {
let score = 0;
let totalQuestions = 10;
for (let question = 1; question <= totalQuestions; question++) {
score = subtractQuestions(question, score);
console.log();
}
console.log(`Quiz finished! Your score is ${score} out of ${totalQuestions}.`);
}

runMathQuiz();
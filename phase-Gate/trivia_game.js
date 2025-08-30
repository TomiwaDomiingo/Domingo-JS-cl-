function Question(text, options, correctAnswer){
this.text = text; 
this.options = options; 
this.correctAnswer = correctAnswer; 
}


let questions = [
new Question("Is water natural?", ["1. Yes", "2. No"], 1),
new Question("Can a horse run faster than a cheetah?", ["1. Yes", "2. No", "3. Sometimes", "4. Equal speed"], 2),
new Question("Is Semicolon a good place?", ["1. Yes", "2. No"], 3),
new Question("Can 100 men kill a gorilla?", ["1. Yes", "2. No", "3. Maybe", "4. Impossible"], 3),
new Question("Will I crash out soon?", ["1. Yes", "2. No"], 2),
new Question("Will Nigeria be great again?", ["1. Yes", "2. No", "3. Possibly", "4. Never"], 3),
new Question("Is phase gate important?", ["1. Yes", "2. No", "3. Sometimes"], 1),
new Question("Is AI destroying the world?", ["1. Yes", "2. No", "3. Maybe"], 2),
new Question("Can a man become great from comparing himself to others?", ["1. Yes", "2. No"], 2),
new Question("Can you take a bullet for someone you love?", ["1. Yes", "2. No"], 2)
];

function simpleShuffle(allQuestions){
let newShuffled = [];
let viewedQuestion = [];
    
while (viewedQuestion.length < allQuestions.length){
let randomQuestionIndex = Math.floor(Math.random() * allQuestions.length);
if (!viewedQuestion.includes(randomQuestionIndex)){
viewedQuestion.push(randomQuestionIndex);
newShuffled.push(allQuestions[randomQuestionIndex]);
}
}
return newShuffled;
}

questions = simpleShuffle(questions);

let usedQuestions = Array(10)
let score = 0;
let missedQuestions = [];
let correctAnswers = [];
let questionsAnswered = 0;

const prompt = require('prompt-sync')();

console.log("Welcome to MyTrivia! Select a number from 1 to 10.");

function askQuestion(){
if (questionsAnswered >= 10){
console.log(`\nIre o! Your final score is ${score}/10.`);
if (missedQuestions.length > 0){
console.log("\nMissed Questions:");
for (let currentQuestionIndex = 0; currentQuestionIndex < missedQuestions.length; currentQuestionIndex++){
console.log(`Question: ${missedQuestions[currentQuestionIndex]}`);
console.log(`Correct Answer: ${correctAnswers[currentQuestionIndex]}\n`);
}
}
return;
}

let userChoice = prompt("Select a number (1-10): ");
let choice = parseInt(userChoice);

if (isNaN(choice) || choice < 1 || choice > 10){
console.log("Invalid Question. Pick Another.");
askQuestion();
return;
}
if (usedQuestions[choice - 1]){
console.log(`Question ${choice} answered already. Choose another.`);
askQuestion();
return;
}

usedQuestions[choice - 1] = true;
let currentQuestion = questions[choice - 1];

console.log(`\nYour Question ${choice}: ${currentQuestion.text}`);
for (let index = 0; index < currentQuestion.options.length; index++){
console.log(currentQuestion.options[index]);
}

let attempts = 0;
function handleAnswer(){
let answer = prompt(`Attempt ${attempts + 1}/2 - Enter your answer : `);
let userAnswer = parseInt(answer);
attempts++;

if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 4){
console.log("Invalid answer. Choose between 1 and 4.");
if (attempts < 2){
handleAnswer();
} else {
finalizeQuestion();
}
return;
}

if (userAnswer === currentQuestion.correctAnswer){
console.log("Correct!");
score++;
questionsAnswered++;
askQuestion();
} else {
console.log("Incorrect. Try again.");
if (attempts < 2){
handleAnswer();
} else {
missedQuestions.push(currentQuestion.text);
correctAnswers.push(currentQuestion.options[currentQuestion.correctAnswer - 1]);
console.log(`Sadly, you have no attempts. The correct answer was: ${currentQuestion.options[currentQuestion.correctAnswer - 1]}`);
questionsAnswered++;
askQuestion();
}
}
}

function finalizeQuestion(){            
missedQuestions.push(currentQuestion.text);
correctAnswers.push(currentQuestion.options[currentQuestion.correctAnswer - 1]);
console.log(`Sorry, you're out of attempts. The correct answer was: ${currentQuestion.options[currentQuestion.correctAnswer - 1]}`);
questionsAnswered++;
askQuestion();
}
handleAnswer();
}

askQuestion();
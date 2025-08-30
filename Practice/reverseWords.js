function reverseWords(text) {
let reversed = "";
for (let position = text.length - 1; position >= 0; position--) {
reversed = reversed + text[position];
}
return reversed;
}

console.log("Reverse 'hello':", reverseWords("hello")); 


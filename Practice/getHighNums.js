function getHighNums(numberList, threshold) {
let newList = [];
let newIndex = 0;
for (let index = 0; index < numberList.length; index++) {
if (numberList[index] > threshold) {
newList[newIndex] = numberList[index];
newIndex = newIndex + 1;
}
}
return newList;
}

console.log("Numbers above 2 in [1, 3, 5, 2]:", getHighNums([1, 3, 5, 2], 2)); 
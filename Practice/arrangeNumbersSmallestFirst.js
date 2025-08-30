function arrangeNumbersSmallestFirst(numberList) {
let listLength = numberList.length;
for (let round = 0; round < listLength; round++) { 
for (let position = 0; position < listLength - 1; position++) {
if (numberList[position] > numberList[position + 1]) {
let temporaryNumber = numberList[position];
numberList[position] = numberList[position + 1];
numberList[position + 1] = tempNumber;
}
}
}
return numberList;
}


console.log("Sort [3, 1, 4, 2] ascending:", arrangeNumbersSmallestFirst([3, 1, 4, 2]));
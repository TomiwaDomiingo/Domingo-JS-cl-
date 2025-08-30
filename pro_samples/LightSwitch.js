const isDay = false; 
const isLightOn = !isDay;

console.log("Daytime?");
console.log(isDay);

console.log("Lights on?");
console.log(isLightOn);

let batteryLevel = 50;

console.log("Battery level?");
console.log(batteryLevel + "%");

const isWorking = isLightOn && batteryLevel > 0;

console.log("Everything working")
console.log(isWorking);
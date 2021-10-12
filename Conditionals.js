const raining = true;
const cold = false;
const temperature = -129;

if (raining) {
    console.log("Don't forget your umbrella!");
}
if (temperature < 0) {
    console.log("Make sure to pick out a scarf!");
} else if (temperature < 15) {
    console.log("Short sleeves won't cut it!");
} else {
    console.log("Short sleeves are fine.");
}
if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a great idea…");
  }
if (!raining) {
    console.log("Leave your umbrella at home!");
  }
console.log("Now you decide if you want to go outside or not!");
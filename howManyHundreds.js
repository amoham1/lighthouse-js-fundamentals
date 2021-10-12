function howManyHundreds(num) {
  var x = Math.floor(num / 100);
  if (x < 1) {
    return 0;
  }
  else {
    return x;
  }
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(529));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
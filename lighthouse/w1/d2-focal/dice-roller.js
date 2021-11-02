//Write a program that takes a single parameter
//from the command line, a number,
//and rolls that many six-sided dice.


// removes the fisrt 2 parts of the array
let dice = process.argv.slice(2);

//creating a function that takes the roll and returns as shown
const rollDie = function(dice) {

  let result = [];
  // loops to get random dice rolls for the amount given
  for (let i = 0; i < dice; i++) {
  //calcution of get dice roll between 1 - 6 and
  // adding space to make it look like result
    let roll = Math.floor(' '+Math.random() * 6) + 1;
  // pushing results to the empty array
    result.push(roll);
  }
  // adding , to the end of very element
  return result.join(",");
};

console.log('Rolled ' + dice + " dice: " + rollDie(dice));
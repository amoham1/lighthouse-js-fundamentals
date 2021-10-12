const ageCalculator = function (name,year,current_year){
  var person = current_year - year;
  
  return name + ' is ' + person + " years old";
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Jack", 2003, 2015));
console.log(ageCalculator("Ali", 2015, 2015));
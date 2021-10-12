var x = 100;
/* your stop condition goes here */
while (x <= 200) {
  // check divisibility
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  else if (x % 3 === 0) {
    console.log("Loopy");
  }
  else if (x % 4 === 0) {
    console.log("Lighthouse");
  }
  else {
    console.log(x);
  }

  // increment x
  x = x + 1;
}

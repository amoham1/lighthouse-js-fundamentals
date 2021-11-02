

// setTimeout(() => {
//   // print the char here
//   const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   process.stdout.write(char);
// }
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.

const sentence = "hello there from lighthouse labs";
let n = 0
for (let val of sentence){

  setTimeout(()=>{
    process.stdout.write(val);
  },n);
  n += 50;
}

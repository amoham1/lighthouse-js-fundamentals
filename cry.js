/*
 * Programming Quiz: Cry (5-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here  
var sound = "";
var cry = function (num){
    for (var x = 0; x < num; x ++){
         sound = sound + "cry"; 
        
    }
    sound = sound + "!";
    return sound ;
}
console.log(cry(3));
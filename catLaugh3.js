var sound ="";
var laugh = function (num){
    for (var x = 0; x < num; x++){
        sound = sound + "ha"
    }
    sound = sound + "!";
    return sound ;
}/* finish the function expression */

console.log(laugh(10));
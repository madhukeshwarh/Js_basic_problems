const prompt=require("prompt-sync")();
function multiply(a, b){
    return a * b
  }
  var a=prompt('enter a number: ');
  var b=prompt('enter another number: ');
  console.log(multiply(a,b));
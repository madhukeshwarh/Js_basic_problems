const prompt=require('prompt-sync')();
repeat=function(arr){
    var a=arr.split(",");
    const n=parseInt(a[0]);
    return a[1].repeat(n);
}
var x=prompt('Enter the number of times the string should be repeated and the string both separated by , : ');
console.log(repeat(x));

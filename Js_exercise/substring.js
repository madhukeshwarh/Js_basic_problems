const prompt=require('prompt-sync')();
var remove=function(str){
    return str.substring(1,str.length-1);
}
var str =prompt('Enter the String: ');
console.log(remove(str));
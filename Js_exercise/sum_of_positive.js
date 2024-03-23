const prompt=require('prompt-sync')();
function sum(arr){
    if (arr.length===0){
        return 'array is empty'
    }
    let res=0;
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>0){
            res+=arr[i];
        }
    }
    return res;
}
const input=prompt('enter the element of the array');
const array=input.split(",").map(Number);
const sum1=sum(array);
console.log(sum1);
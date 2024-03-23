function arrsum(arr1,arr2){
    let newarray=[];
    for (let i=0;i<arr1.length;i++){
        const arr1val=arr1[i];
        const arr2val=arr2[i];
        const addedval=arr1val+arr2val;
        newarray.push(addedval);

    }
    return newarray
}
const arr1=[1,2,3];
const arr2=[1,2,3];
console.log(arrsum(arr1,arr2))
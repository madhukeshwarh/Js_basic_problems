const prompt=require('prompt-sync')();
function findAverage(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}
        const input = prompt("Enter elements of the array separated by commas:");
        const array = input.split(",").map(Number);
        const average = findAverage(array);
        console.log(findAverage(array));
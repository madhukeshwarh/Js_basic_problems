function countSheep(arr) {
    let sheepCount = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        sheepCount++;
      }
    }
  
    return sheepCount;
  }
  const sheepArray = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];

  const numberOfSheep = countSheep(sheepArray);
  console.log("Number of sheep present:", numberOfSheep);
  
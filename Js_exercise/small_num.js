class SmallestIntegerFinder {
    findSmallestInt(arr) {
      let small_num;
      for(let i=0;i<arr.length;i++){
       const num= arr[i];
        if(i===0){
          small_num=num
        }
        if(small_num>num){
          small_num=num;
        }
      }
      return small_num;
    }
  }
  arr=[2,3,-1,4];
  const obj=new SmallestIntegerFinder()
  console.log(obj.findSmallestInt(arr));
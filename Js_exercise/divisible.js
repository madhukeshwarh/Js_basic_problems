function isDivisible(n, x, y) {
    const res1=n/x;
    const res2=n/y;
    if (res1%1===0&& res2%1===0){
      return true;
    }else{
      return false;
    }
  }
  const n=20;
  const x=2;
  const y=5;
  console.log(isDivisible(n, x, y))
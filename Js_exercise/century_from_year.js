function century(year) {
    if(year<100){
      return 1;
    }
    const first=year.toString().substr(0,2);
    if(year%100===0){
      return Number(first);
    }else{
      return Number(first)+1;
    }
  }
const year=2001;
console.log(century(year));
var humanYearsCatYearsDogYears = function(humanYears) {
    let catage;
    let dogage;
    if(humanYears===1){
      return[humanYears,15,15];
    }
    if(humanYears===2){
      return[humanYears,24,24];
    }
    const extrayears=humanYears-2;
    const extracatyears=extrayears*4;
    const extradogyear=extrayears*5;
    return [humanYears,24+extracatyears,24+extradogyear];
  }
const humanYears=25;
console.log(humanYearsCatYearsDogYears(humanYears));  
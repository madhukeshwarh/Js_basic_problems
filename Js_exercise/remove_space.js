function noSpace(x){
    const arr=x.split(" ");
      let newarr=[];
      for(let i=0;i<arr.length;i++){
    const string=arr[i].trim();
        newarr.push(string);
    }
      const final=newarr.join("");
      return final;
    }
const x="hello world";
console.log(noSpace(x));
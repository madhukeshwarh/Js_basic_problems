function solution(str){
    const arr=str.split("");
    const reversed=arr.reverse();
    const final=reversed.join("")
    return final
  }
  const str="world";
  console.log(solution(str));
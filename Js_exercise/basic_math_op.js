function basicOp(operation, value1, value2){
    let res;
    switch(operation){
    case '+':
        res=value1+value2;
        break;
    case '-':
        res=value1-value2;
        break;
    case '*':
        res=value1*value2;
        break;
    case '/':
        res=value1/value2;
        break;
    }
    return res;
  }
  const operation="+";
  const value1=2;
  const value2=3;
  console.log(basicOp(operation, value1, value2))
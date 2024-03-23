function points(games) {
    let totalpoints=0;
    for(let i=0;i<games.length;i++){
      const val=games[i];
      const parts=val.split(":");
      const x=parts[0];
      const y=parts[1];
      if(x>y){
        totalpoints+=3
      }else if(x===y){
        totalpoints+=1;
      }
    }
    return totalpoints;
  }
  const games=["1:2","2:1","3:4","4:3","5:1"]
  console.log(points(games));
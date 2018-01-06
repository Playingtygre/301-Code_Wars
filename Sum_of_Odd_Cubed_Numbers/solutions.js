function cubeOdd(arr) {
    let cube =  arr.map(x => Math.pow(x, 3));
     if (cube.includes(NaN) ) {
     return undefined
     } else {
     let filtered = cube.filter (x => x %2);
     if (filtered.length === 0) 
     { return 0;}
     else { 
     const reducer = (acc, cur) => acc + cur;
     
     var num = filtered.reduce(reducer)
     
     return num;
     }
     }
   }
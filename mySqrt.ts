function mySqrt(x: number): number {
   if(x === 2){
        return x
     }else{
        return mySqrt(x/2)
     }

}

console.log(mySqrt(4));

function mySqrt0(x: number): number {
  let left = 0;
  let right = x;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;
    
    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return Math.floor(right);
};

console.log(mySqrt0(24));
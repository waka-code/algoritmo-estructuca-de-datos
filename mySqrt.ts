function mySqrt(x: number): number {
  /* if(x === 2){
        return x
     }else{
        return mySqrt(x/2)
     }*/

  if (x % 2 == 0) {
    return 2;
  } else {
    return 0;
  }
}

console.log(mySqrt(16));

function mostFrequentEven(nums: number[]): number {
  let numEnterio: number[] = [];
  let numMenor = -1;
  let countNumber: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      numEnterio.push(nums[i]);
      numEnterio.filter((s) => {
        if (s === nums[i]) {
          countNumber.push(s);
        }
      });
    }
  }
  return numMenor;
}

/*1*/

console.log(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7]));
console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 4, 1]));
console.log(mostFrequentEven([4, 4, 4, 9, 2, 4]));

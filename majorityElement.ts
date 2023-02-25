//1
function majorityElements(nums: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let f = 0; f < nums[i]; f++) {
      if (nums[i] === nums[f]) {
        result.push(nums[i]);
      }
    }
  }
  return result;
}

console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([3,2,3]))
console.log(majorityElement([3, 3, 4]));
console.log(majorityElement([6,5,5]));


// Optimizado
function majorityElement(nums: number[]): number {
  const num = nums.sort((nums0, nums1) => nums0 - nums1);
  const numsLongitud: number = nums.length;

  if (numsLongitud % 2 === 0) return nums[numsLongitud / 2];
  else return num[(numsLongitud - 1) / 2];
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2,1,1]));
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([3, 3, 4]));
console.log(majorityElement([6, 5, 5]));
console.log(majorityElement([6, 5, 5]));

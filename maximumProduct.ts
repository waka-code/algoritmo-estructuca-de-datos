function maximumProduct(nums: number[] | any): number {
  /*const result = nums.reduce((acc, curr) => acc * curr, 1);
  return result;*/
  nums.sort((a, b) => a - b);
  const n = nums.length;

  console.log(nums[n - 1]);
  console.log(nums[n - 2]);
  console.log(nums[n - 3]);
  console.log(nums[0]);

  return Math.max(
    nums[n - 1] * nums[n - 2] * nums[n - 3],
    nums[0] * nums[1] * nums[n - 1],
    nums[0] * nums[n - 2] * nums[n - 1]
  );
}
const numss = [1, 2, 3];
const nums0 = [1, 2, 3, 4];
const nums1 = [-1, -2, -3];

console.log(maximumProduct(numss));
console.log(maximumProduct(nums0));
console.log(maximumProduct(nums1));
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));

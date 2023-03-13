function removeElement(nums: number[], val: number): any | number {
  let result: any[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      result.push(nums[i]);
    }
    if (result[i] == "") {
      result.push("_");
    }
  }

  return result;
}

function removeElements(nums: number[], val: number): any {
  nums = nums.filter((num) => num !== val);
  return nums;
}

const di = [0, 1, 2, 2, 3, 0, 4, 2];
const dis = [3, 2, 2, 3];
console.log(removeElement(dis, 3));
console.log(removeElement(di, 2));
console.log(removeElements(di, 2));

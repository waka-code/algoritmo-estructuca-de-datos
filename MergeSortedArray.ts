/*function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
  const newArray: number[] = [];

  for (let i = 0; i < m; i++) {
    for (let j = i; j < nums1.length; j++) {
      if (i === j) {
        newArray.push(nums1[i]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < nums2.length; j++) {
      if (i === j) {
        newArray.push(nums2[i]);
      }
    }
  }

  return newArray.sort();
}
*/
function merges(nums1: number[], m: number, nums2: number[], n: number): number[] {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
 
    while (i >= 0 && j >= 0) {
       if (nums1[i] > nums2[j]) {
          nums1[k] = nums1[i];
          i--;
       } else {
          nums1[k] = nums2[j];
          j--;
       }
       k--;
    }
 
    while (j >= 0) {
       nums1[k] = nums2[j];
       j--;
       k--;
    }
 
    return nums1;
 }

const nums1: number[] = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2: number[] = [2, 5, 6];
const n = 3;
console.log(merges(nums1, m, nums2, n));
//Entrada: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//Salida: [1,2,2,3,5,6]
//Explicación: Las matrices que estamos fusionando son [1,2,3] y [2,5,6].
//El resultado de la fusión es [ 1 , 2 ,2, 3 ,5,6] con los elementos subrayados provenientes de nums1.

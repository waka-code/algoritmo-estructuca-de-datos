// Dadas dos matrices ordenadas y de tamaño y respectivamente, devuelve la mediana de las dos matrices ordenadas.nums1nums2mn

// La complejidad general del tiempo de ejecución debe ser .O(log (m+n))



// Ejemplo 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Ejemplo 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

 const newArray = [...nums1, ...nums2]
 const orden: number[] = newArray.sort()
 console.log(orden)

 const matris: number[] = []
 let count = 0;
 for (let n of orden) {
  if (orden.length === 1 && orden[0] !== 0) {
   const result = orden[0] / orden.length
   return result
  }
  

  if (orden[0] !== n && n !== orden[orden.length - 1]) {
   count += n

   if (count === 0) {
    count = n
   }

   matris.push(n)
  }
 }

 const length = matris.length
 const result = count / length

 if (Number.isNaN(result)) {
  return 0
 }
 return result
};
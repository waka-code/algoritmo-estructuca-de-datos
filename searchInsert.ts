/*
Dada una matriz ordenada de enteros distintos y un valor objetivo,
devuelve el índice si se encuentra el objetivo.
Si no, devuelve el índice donde estaría si se insertara en orden.
Debe escribir un algoritmo con  O(log n)complejidad de tiempo de ejecución.
*/

function searchInsert(nums: number[], target: number): number {
  let result = 0;

  nums.forEach((ele, idx) => {
    if (ele === target) return (result += idx);
  });

  return result;
}

console.log(searchInsert([1, 3, 5, 6], 1));
console.log(searchInsert([1, 3, 5, 6], 3));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 6));

/*
Dada una matriz ordenada de enteros distintos y un valor objetivo,
devuelve el índice si se encuentra el objetivo.
Si no, devuelve el índice donde estaría si se 
insertara en orden.

Debe escribir un algoritmo con  O(log n)complejidad de tiempo de ejecución.

Entrada: nums = [1,3,5,6], destino = 5
 Salida: 2

 Entrada: nums = [1,3,5,6], objetivo = 2
 Salida: 1

 Entrada: nums = [1,3,5,6], destino = 7
 Salida: 4
*/
//First Metthod
function searchInsert(nums: number[], target: number): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result = nums.indexOf(target);
    } else if (nums[i] !== target) {
      nums.push(target);
    }
  }
  let orden = nums.sort();
  result = orden.indexOf(target);

  return result;
}

console.log(searchInsert([1, 2, 3, 4, 5, 10], 2));
console.log(searchInsert([1, 3, 5, 6], 8));
console.log(searchInsert([1, 3, 5, 6], 3));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 6));

//second Metthod
function secondMetthodSearchInsert(nums: number[], target: number) {
  let result = nums.length;
  for (let i = 0; i < result; i++) {
    if (nums[i] == target) return i;
    else if (nums[i] > target) return i;
  }
  return result;
}

console.log(secondMetthodSearchInsert([1, 2, 3, 4, 5, 10], 2));
console.log(secondMetthodSearchInsert([1, 3, 5, 6], 8));
console.log(secondMetthodSearchInsert([1, 3, 5, 6], 3));
console.log(secondMetthodSearchInsert([1, 3, 5, 6], 5));
console.log(secondMetthodSearchInsert([1, 3, 5, 6], 6));


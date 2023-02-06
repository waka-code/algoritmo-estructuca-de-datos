//quick sort ordenamiento arregle
function quickSort(array: number[]): any {
  if (array.length < 1) {
    return [];
  }
  let right = [];
  let left = [];
  let pivot = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 6, 3, 2, 9, 8]));

function bblSort(arr: number[]) {
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

bblSort([234, 43, 55, 63, 5, 6, 235, 547]);

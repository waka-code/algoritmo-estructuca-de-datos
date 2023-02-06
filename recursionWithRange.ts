function recursionWithRange(numOne: number, numTwo: number) {
  if (numTwo - numOne === 2) {
    return [numOne + 1];
  } else {
    const arr: number[] = recursionWithRange(numOne, numTwo - 1);
    arr.push(numTwo - 1);
    return arr;
  }
}

console.log(recursionWithRange(2, 9));

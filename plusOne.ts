/*
Se le da un entero grande representado como una matriz de enteros digits,
donde cada uno digits[i]es el dígito del entero. Los dígitos están ordenados
de más significativos a menos significativos en orden de izquierda a derecha.
El entero grande no contiene ningún 's inicial.ith0
Incremente el entero grande en uno y devuelva la matriz de dígitos resultante .
*/
const digits = [1, 2, 3, 4, 5];

//1
function plusOnes(digits: number[]): number[] {
  for (let i = 0; i < digits.length; i++) {
    if (digits[digits.length - 1] === digits[i]) {
      digits[digits.length - 1]++;
    }
  }
  return digits;
}

//2
function plusOne(digits: number[]): number[] {
  digits[digits.length - 1]++;
  return digits;
}

console.time(`time`);
console.log(plusOnes(digits));
console.timeEnd("time");

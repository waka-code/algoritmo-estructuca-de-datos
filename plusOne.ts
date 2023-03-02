/*
Se le da un entero grande representado como una matriz de enteros digits,
donde cada uno digits[i]es el dígito del entero. Los dígitos están ordenados
de más significativos a menos significativos en orden de izquierda a derecha.
El entero grande no contiene ningún 's inicial.ith0
Incremente el entero grande en uno y devuelva la matriz de dígitos resultante .
*/

function plusOne(digits: number[]): number[] {
  let longitud = digits.length;
  let ultimoIndice = longitud - 1;
  let ultimoElemento = digits[ultimoIndice];
  ultimoElemento += 1;
  digits[ultimoIndice] = ultimoElemento;

  return digits.length === 1 ? [1,0] : digits;
}

const digits = [9];
console.log(plusOne(digits));

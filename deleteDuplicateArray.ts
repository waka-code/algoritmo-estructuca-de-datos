/*
Dada una matriz de enteros numsordenada en orden no decreciente ,
elimine los duplicados en el lugar de modo que cada elemento único aparezca solo una vez.
El orden relativo de los elementos debe mantenerse igual .

Dado que es imposible cambiar la longitud de la matriz en algunos idiomas,
debe colocar el resultado en la primera parte de la matriz nums. Más formalmente,
si hay kelementos después de eliminar los duplicados, entonces los primeros kelementos
nums deberían contener el resultado final. Da igual lo que dejes más allá de los primeros  k elementos.

Regrese kdespués de colocar el resultado final en las primeras kranuras denums.

No asigne espacio extra para otra matriz. Debe hacer esto modificando 
la matriz de entrada en el lugar con memoria adicional O (1)

Entrada: números = [0,0,1,1,1,2,2,3,3,4]
 Salida: 5, números = [0,1,2,3,4,_,_,_,_, _]
 Explicación: Su función debería devolver k = 5, siendo los primeros cinco elementos de nums 0, 1, 2, 3 y 4 respectivamente. 
No importa lo que dejes más allá de la k devuelta (por lo tanto, son guiones bajos).
*/
let numDuplicate = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
console.log(numDuplicate);

/*1*/
function removeDuplicates(nums: number[]): number[] {
  let elementDuplicate = nums.filter((n, i) => {
    return nums.indexOf(n) == i;
  });

  return elementDuplicate;
}
console.log(removeDuplicates(numDuplicate));

/*2*/
function removeDuplicatess(nums: number[]): number[] {
  return [...new Set(nums)];
}
console.log(removeDuplicatess(numDuplicate));

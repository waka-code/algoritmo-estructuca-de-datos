/*
Dada una matriz de números enteros nums y 
un número entero target, devuelva los índices
de los dos números de modo que sumentarget .
Puede suponer que cada entrada tendría exactamente
una solución y no puede usar el mismo elemento dos veces.
Puede devolver la respuesta en cualquier orden. 

Entrada: nums = [2,7,11,15], destino = 9
 Salida: [0,1]
 Explicación: Como nums[0] + nums[1] == 9, devolvemos [0, 1].

 Entrada: nums = [3,2,4], destino = 6
 Salida: [1,2]

 Entrada: nums = [3,3], objetivo = 6
 Salida: [0,1]
*/

function twoSume(nums: number[], target: number): number[] {
  let acumulador: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++){
        if (nums[i] + nums[j] === target) {
            acumulador.push(i)
            acumulador.push(j)
          }
    }
  }
  return acumulador;
}

console.log(twoSume([2, 5, 2, 3, 5], 7));



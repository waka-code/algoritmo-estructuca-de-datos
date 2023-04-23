/*
Entrada: n = 2, confianza = [[1,2]]
 Salida: 2

 Entrada: n = 3, confianza = [[1,3],[2,3],[3,1]]
 Salida: -1

En un pueblo, hay npersonas etiquetadas de 1 a n.
Corre el rumor de que una de estas personas es en secreto el juez del pueblo.
Si el juez del pueblo existe, entonces:

El juez del pueblo no confía en nadie.
Todos (excepto el juez del pueblo) confían en el juez del pueblo.
Hay exactamente una persona que cumple las propiedades 1 y 2 .
Se le proporciona una matriz trustdonde representa que la
persona etiquetada confía en la persona etiquetada .
Si no existe una relación de confianza en la matriz,
entonces dicha relación de confianza no existe.trust[i] = [ai, bi]ai bi trust

Devuelva la etiqueta del juez del pueblo si el juez del pueblo existe y puede ser identificado,
o devuélvala -1 en caso contrario .

recibo un valor y ese valor va a estar siempre en la segunda posicion de mi [], Example: n = 4, alcarde = [[1,4],[2,4],[3,4],[4,4]] = true, salida: 4 es el alcarde
*/
/*
function findJudge(n: number, trust: number[][]): number {
      function findJudge(n: number, trust: number[][]): number {
            let count: number = 1;
            for (let i = 0; i < trust.length - 1; i++) {
               if (trust[i][1] === trust[i + 1][1]) {
                  count++
               } else {
                  return -1
               }
            }
            return count
         };
         
         console.log(findJudge(2, [[1,2]]))
         
  };

  console.log(findJudge(2,[]))
*/
  function findJudge(n: number, trust: number[][]): number {
      let count: number = 1;
      for (let i = 0; i < trust.length - 1; i++) {
         if (trust[i][1] === trust[i + 1][1]) {
            count++
         } else {
            return -1
         }
      }
      return count
   };
   
   console.log(findJudge(2, [[1,2]]))
   
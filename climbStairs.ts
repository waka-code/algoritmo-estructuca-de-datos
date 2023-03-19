/*
Estás subiendo una escalera. Se necesitan N pasos para llegar a la cima.
Cada vez que se puede subir 1 o 2 pasos. ¿De cuántas maneras distintas puedes subir a la cima?

Entrada: n = 2
 Salida: 2
 Explicación: Hay dos formas de subir a la cima. 
1. 1 paso + 1 paso 
2. 2 pasos

Entrada: n = 3
 Salida: 3
 Explicación: Hay tres formas de subir a la cima. 
1. 1 paso + 1 paso + 1 paso + 
2. 1 paso + 2 pasos 
3. 2 pasos + 1 paso

5
1+1+1+1+1
1+1+1+2
2+2+1
3+2
2+3
3+1+1
4+1
1+4



*/
function climbStairs(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(5));

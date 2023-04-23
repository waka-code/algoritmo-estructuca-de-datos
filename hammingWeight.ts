function hammingWeight(n: number): number {

   
   return  Math.log2(n) + 1
};

console.log(hammingWeight(0o1011))
/*
La fórmula para calcular la cantidad de bits
necesarios para representar un número en notación binaria es:

número de bits = log2(número) + 1

Escriba una función que tome la representación binaria de un entero sin signo
 y devuelva el número de bits '1' que tiene (también conocido como el peso de Hamming ).

Nota:
Tenga en cuenta que en algunos lenguajes, como Java, no hay ningún 
tipo de entero sin signo. En este caso, la entrada se dará como un
 tipo entero con signo. No debería afectar su implementación, ya que la representación binaria
  interna del entero es la misma, ya sea que esté firmada o no.
En Java, el compilador representa los enteros con signo utilizando
 la notación de complemento a 2 . Por lo tanto, en el Ejemplo 3 
 , la entrada representa el entero con signo. -3.


 Entrada: n = 00000000000000000000000000001011
 Salida: 3
 Explicación: La cadena binaria de entrada
  00000000000000000000000000001011 tiene un total de tres bits '1'.


  Entrada: n = 000000000000000000000000010000000
 Salida: 1
 Explicación: La cadena binaria de entrada 
 00000000000000000000000010000000 tiene un total de un bit '1'.
*/
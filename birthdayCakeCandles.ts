function birthdayCakeCandles(candles: number[]): number | undefined {
  let contador: number = 0;
  let mostLargerNum = Math.max(...candles);
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === mostLargerNum) {
      console.log(candles[i]);
      contador++;
    }
  }
  return contador;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
console.log(birthdayCakeCandles([44, 53, 31, 27, 77, 60, 66, 77, 26, 36])); 
console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]));
console.log(birthdayCakeCandles([77, 53, 31, 27, 77, 60, 66, 77, 26, 36]));
console.log(
  birthdayCakeCandles([
    1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 100,
  ])
);



/*
function birthdayCakeCandles(candles: number[]): number | undefined {
  let data: number[] = [];
  let contador: number = 0;
  for (let i = 0; i < candles.length; i++) {
    data.push(candles[i]);
    console.log(candles[i]);
    for (let f = i; f < candles.length; f++) {
      if (candles[i] === candles[f]) {
        console.log(candles[f]);
        contador++;
      }
    }
    return contador;
  }
}

Estás a cargo de la torta para el cumpleaños de un niño.
Has decidido que el pastel tendrá una vela por cada año de su edad total.
Solo podrán apagar la vela más alta.
Cuenta cuántas velas son más altas.

Ejemplo
candles = [4,4,1,3]
Las velas de altura máxima son 4 unidades de alto. Hay 2 de ellos, así que regresa 2.

Función descriptiva
Complete la función birthdayCakeCandlesen el editor a continuación.
birthdayCakeCandles tiene los siguientes parámetros:
velas int[n] : las alturas de las velas

Devoluciones
int : el número de velas que son más altas

Formato de entrada
La primera línea contiene un solo entero n,, la talla de candles.
La segunda línea contiene n enteros separados por espacios,
donde cada entero i describe la altura de candles[i].

Entrada de muestra 0
4 
3 2 1 3
Salida de muestra 0
2
Explicación 0
Las alturas de las velas son [3,2,1,3].
Las velas más altas son 3 unidades y hay 2 de ellos.
*/

function valorMA(x: number, u: number): string {
  if (x > u) {
    return x + " es mayor " + u;
  } else {
    return u + " es mayor " + x;
  }
}

console.log(valorMA(3, 4));

function sumeTheTwoValor(x: number, u: number): number {
  return x + u;
}

console.log(sumeTheTwoValor(3, 4));

function mayorDeTresValores(v:number[]){
   let result = 0;
   for(let i = 0;  i < v.length; i++){
      if(v[i] > v[0]){
        result =+ v[i]
      }else{
        result = -1
      }
   }
   return result
}

console.log(mayorDeTresValores([6,6,5,6]));

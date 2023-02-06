const getCombinations = (x: string) => {
  //combinacion de palabras
  const COMBINATIONS: any[] = [];
  //codigos hash
  const HASHCODE: Number[] = [];
  let seed = 41;
  const diccionario = "abefimoprstuv";
  //todas las combinaciones
  for (let i = 0; i < x.length; i++) {
    // combinacion de primera letra x[0]
    let combination = x.charAt(i);
    seed = seed * 19 + diccionario.indexOf(x[i]);
    COMBINATIONS.push(`${combination}:${seed}`);
    HASHCODE.push(seed);
    for (let j = i + 1; j < x.length; j++) {
      // combinacion de las demas letra con x[0]
      combination += x.charAt(j);
      COMBINATIONS.push(`${combination}:${seed}`);
      HASHCODE.push(seed);
    }
  }
  const wordHash = 253674078499881;
  // verifico si wordHash existe en HASHCODE
  //si existe me muestra el hash y (buscamos en combinations manualmente), en caso contrario muestra undefined
  let hashWord = HASHCODE.find((words) => words == wordHash);
  return hashWord;
};

let diccionario = "abefimoprstuv";
console.log(getCombinations(diccionario));
//253674078499881

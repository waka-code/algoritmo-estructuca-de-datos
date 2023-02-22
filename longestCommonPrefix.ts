function longestCommonPrefix(strs: string[]): string {
  let prefix: string = "";
  let letterStrs = strs.toString();

  if (!strs[0] || strs.length == 1) return strs[0] || "";

  for (let i = 0; i < strs.length; i++) {
    if (letterStrs.substring(0, i) === strs[i].substring(0, i)) {
      prefix += strs[i];
    } else if (letterStrs.substring(0, i) !== strs[i].substring(0, i)) {
      return "";
    }
  }
  return strs.length === 2 ? prefix.slice(0, 1) : prefix.slice(0, 2);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["do", "d"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));

/*
Escriba una función para encontrar la cadena de prefijo común más larga entre una matriz de cadenas.
Si no hay un prefijo común, devuelve una cadena vacía "".
*/

function prefix(strs) {
  // check border cases size 1 array and empty first word)
  if (!strs[0] || strs.length == 1) return strs[0] || "";
  let i = 0;
  // while all strs have the same character at position i, increment i
  while (strs[0][i] && strs.every((letterStrs) => letterStrs[i] === strs[0][i]))
    i++;

  // prefix is the substring from the beginning to the last successfully checked i
  return strs[0].substr(0, i);
}
console.log(prefix(["flower", "flower", "flower", "flower"]));

const isValid = (s:string) => {
  const stack:string[] = [];

  for (let i = 0; i < s.length; i += 1) {
    const top = stack[stack.length - 1];
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" && top === "(") {
      stack.pop();
    } else if (s[i] === "]" && top === "[") {
      stack.pop();
    } else if (s[i] === "}" && top === "{") {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("("));

/*
Primer intento

function isValid(s: string): boolean {
  let valid: boolean = true;
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (s !== s[i]) {
      valid = true;
    } else {
      valid = false;
    }
  }
  return valid;
}

Metodo Hash

function isValid(s:string):boolean {
  const stack: string[] = [];
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i = 0; i < s.length; i += 1) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

Dada una cadena que s contiene solo los caracteres
 '(', ')', '{', y , determine si la cadena de entrada es válida.'}''['']'

Una cadena de entrada es válida si:

Los corchetes abiertos deben cerrarse con el mismo tipo de corchetes.
Los corchetes abiertos deben cerrarse en el orden correcto.
Cada paréntesis cerrado tiene un paréntesis abierto correspondiente del mismo tipo
*/

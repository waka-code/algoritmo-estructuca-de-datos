/*function value(s: string) {
  switch (s) {
    case "I": {
      return 1;
      break;
    }
    case "V": {
      return 5;
      break;
    }
    case "X": {
      return 10;
      break;
    }
    case "L": {
      return 50;
      break;
    }
    case "C": {
      return 100;
      break;
    }
    case "D": {
      return 500;
      break;
    }
    case "M": {
      return 1000;
      break;
    }
    default: {
      return 0;
    }
  }
}

function romanToInt(s: string): number {
  let result: number = 0;
  console.log(s);
  for (let i = 0; i <= s.length; i++) {
    let firtsPositionString: number | string = value(s.charAt(i));
    console.log(i);
    console.log(firtsPositionString);
    if (i + 1 < s.length) {
      let restPositionString: number | string = value(s.charAt(i + 1));
      console.log(restPositionString);
      if (firtsPositionString >= restPositionString) {
        result = result + firtsPositionString;
       console.log(result);
      } else {
        result = result + (firtsPositionString - restPositionString);
       console.log(result);
        i++;
       console.log(i);
      }
    } else {
      result = result + firtsPositionString;
      console.log(result);
    }
  }
  console.log(result);
  return result;
}

console.log(romanToInt("MM"));*/

function romanToInt(s: string): number {
  const romanNumber = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result: number = 0;
  for (let i = 0; i < s.length; i++) {
    const prev: number = romanNumber[s[i]];
    const next: number = romanNumber[s[i + 1]];
    if (prev < next) {
      result -= prev;
    } else {
      result += prev;
    }
    // (curr < next) ? (num -= curr) : (num += curr);
  }
  return result;
}

console.log(romanToInt("IV"));
console.log(romanToInt("VIII"));
console.log(romanToInt("LXXIX"));
console.log(romanToInt("MCMXCIV"));

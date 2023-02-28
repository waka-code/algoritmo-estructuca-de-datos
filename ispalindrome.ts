function isPalindrome(x: number): boolean {
  let convertedNumber = x.toString();
  let reverString = convertedNumber.split("").reverse().join("");
  return reverString === convertedNumber ? true : false;
}
console.log(isPalindrome(858));

//2
function isPalindromes(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) return false;
    left++;
    right--;
  }

  return true;
}

isPalindromes("neuquen"); // true
isPalindromes("Buenos Aires"); // fa

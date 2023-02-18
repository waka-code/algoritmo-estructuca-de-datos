function isPalindrome(x: number): boolean {
    let convertedNumber = x.toString();
    let reverString = convertedNumber.split("").reverse().join("");
    return reverString === convertedNumber ? true : false
 }
 
 console.log(isPalindrome(858));
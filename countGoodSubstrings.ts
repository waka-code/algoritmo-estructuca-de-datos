/**
A string is good if there are no repeated characters.
Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
A substring is a contiguous sequence of characters in a string.

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".

Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".
 */

function countGoodSubstrings(s: string): number {
  let result: string[] = [];

  for (let i = 0; i < s.length - 2; i++) {
    const uniqueChain = s.slice(i, i + 3);
    console.log(uniqueChain);
    if (new Set(uniqueChain).size === 3) {
      result.push(uniqueChain);
    }
  }
  return result.length;
}
const s = "xyzzaz";
const ss = "aababcabc";
console.log(countGoodSubstrings(s));
console.log(countGoodSubstrings(ss));
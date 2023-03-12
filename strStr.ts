/*
Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index of the first 
occurrence of needle in haystack, or -1 if needle is not part of haystack.

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

function strStr(haystack: string, needle: string): number {
    let index: number = haystack.indexOf(needle) 
    return index
 };
 
 const Input= "sadbutsad"
 const Inputs = "sad"
 console.log(strStr(Input,Inputs))
/*
You are given a sentence represented by a string str. Your objective is to reverse all the characters in each word of the sentence while ensuring that the case of each character remains unchanged. The spaces between words should be preserved as they are, and the overall order of the words in the sentence must not be altered.

You should solve the problem without using the Array.prototype.reverse method.

Problem: Given a string, return a string where each word is reversed.

  Rules:
    - Do not use `Array.prototype.reverse`
    - Case must be preserved
    - Spaces must be preserved
    - Order of words must remain in order
    - Words are delimited by spaces

Example:
input: 'Hello World' output: "olleH dlroW"
split into words: ['Hello', 'World']
now reverse each word: ['olleH', 'dlroW']
now join back together: 'olleH dlrow'

Data Structure:
beginning: string
  intermediate: array of words
ending: string

High Level Algorithm:
1. split the string into an array of `words` using `' '` as the split delimiter
2. iterate through each `word` of `words` array (use map for transformation)
  3. split `word` into an array of `chars`
  3. create a `left` pointer that starts at `0`
  4. create a `right` pointer that starts at `word.length - 1`
  5. while `left` < `right` -> swap characters: `chars[left] = chars[right] & vice versa
  6. increment left, decrement right
  7. join `chars` back together and use as return value for `map`
8. join `words` back together and return
*/

function reverseWord(word) {
  const chars = word.split('');
  let right = chars.length - 1;
  for (let left = 0; left < right; left += 1) {
    [ chars[left], chars[right] ] = [ chars[right], chars[left] ];
    right -= 1;
  }
  return chars.join('');
}

function reverseWords(string) {
  return string.split(' ')
               .map(reverseWord)
               .join(' ');
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
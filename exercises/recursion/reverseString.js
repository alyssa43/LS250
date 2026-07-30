/*
Reverse String
Implement a recursive function that reverses a given string. The function should take a string as input and return its reverse. For example, if the input is "hello", the function should return "olleh". Solve the problem using recursion.
*/

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.


/* Solution & Discussion

Solution

function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

Discussion
The Base Case

The base case for this problem occurs when the string becomes empty. An empty string is considered to be its reverse.

The Recursive Definition

The recursive definition for this problem can be defined as follows: Take the first character of str and append it to the reverse of the remainder of str.
*/
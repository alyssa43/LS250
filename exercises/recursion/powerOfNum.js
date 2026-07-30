/*
Create a function that computes the power of a number using recursion. The function should take two parameters: the base x and the exponent n, and return the result of x raised to the power of n (x^n). For example, if x is 2 and n is 3, the function should return 8, since 2^3 is 8. The exponent will always be a non-negative number.

Any number to the power of 0 is 1
Any number to the power of 1 is the number itself
Example test cases:
*/

console.log(power(2, 3) === 8);
console.log(power(5, 0) === 1);
console.log(power(3, 4) === 81);
console.log(power(7, 2) === 49);
console.log(power(10, 1) === 10);

// All test cases should log true.

/* Hint
To solve this, remember that raising a number to a power means multiplying it by itself repeatedly. Your function should multiply the base number by itself one less time than the exponent.
*/

/* Solution & Discussion

Solution

function power(x, n) {
  if (n === 0) {
    return 1;
  }
  return x * power(x, n - 1);
}

Discussion
The Base Case

The simplest scenario is when you need to calculate x raised to the power of 0 (x^0). No matter what x is, the answer is always 1. This is your starting point or base case: if n is 0, then return 1.

The Recursive Definition

To find x raised to the power of n, think of it as x multiplied by x raised to the power of n-1. In simpler terms, if you need to calculate x^n, first calculate x raised to n-1, then multiply the result by x again. This breaks down the problem into smaller, more manageable steps, each step reducing the power by 1 until you reach the base case.

Further Exploration
Can you solve the problem when the second argument can be a negative number as well?
*/
/*
Create a recursive function that counts the number of digits in a given integer. The function should accept an integer and return the count of its digits. For instance, if the input is 12345, the function should return 5.
*/

console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
console.log(countDigits(0) === 1);

// All test cases should log true.

/* Hint
Think about how dividing a number by 10 affects its digits. For instance, dividing 123 by 10 gives 12.3, and in integer division, you'd get 12, effectively removing the digit 3.
*/

/* Solution & Discussion

Solution

function countDigits(n) {
  if (n < 10) {
    return 1;
  }
  return 1 + countDigits(Math.floor(n / 10));
}

Discussion
The Base Case

The base case for this function occurs when the integer becomes a single digit, which is when the integer n is less than 10. For any single-digit number (including 0), the count of digits is 1. Therefore, when n is less than 10, the function countDigits(n) should return 1.

The Recursive Definition

The recursive definition can be stated as: The number of digits in a given number equals 1 plus the number of digits in the number obtained by removing its last digit. This removal of the last digit from the number n is accomplished by performing Math.floor(n / 10).
*/
/*
Sum Of Elements in an Array
Given an array of integers nums, find sum of all of its elements using recursion.
*/

console.log(sum([1, 2, 3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);

// All test cases should log true.

/* Solution & Discussion

Solution

function sum(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sum(nums.slice(1));
}

Discussion
The Base Case

Our base case in this problem is when an array is empty. Since we don't have elements in it, the sum must be 0.

The Recursive Definition

The sum of numbers in an array is the first number in the array plus the sum of the rest of the numbers in the array.
*/
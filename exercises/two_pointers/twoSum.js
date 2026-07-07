/*
In this problem, you're given an array of integers nums and a target integer target. Your objective is to find the maximum sum that can be obtained by adding two distinct elements from the array, where this sum is less than the target.

Requirements:

The input will be an array of integers, nums, and a target integer, target.
You need to find the maximum value of nums[i] + nums[j] where i != j and nums[i] + nums[j] < target.
If no such pair exists, return -1.

Problem: Given an array of `nums` and a `target` integers, find and return the highest possible sum that occurs from only the distinct values of `nums` and that is less than the  `target`. If no such sum exists, return `-1`.

  Rules:
    - `nums` will not be guaranteed to be sorted
    - "distinct values" means each element itself is considered "distinct" - not that values need to be distinct (keep duplicate values)

Example: 
nums = [3, 1, 4, 5], target = 5
sorted = [1, 3, 4, 5]

[ 1, 3, 4, 5 ]
  ^        ^
left      right
right is >= target so decrement 

[ 1, 3, 4, 5 ]
  ^     ^
left   right
right is >= target so decrement

[ 1, 3, 4, 5 ]
  ^  ^
left right
right is < target so add values at left and right
left & right sum is < target so reassign `result` to left & right sum
incrment left 
left now === right -> exit and return `result`


nums = [6, 8, 10, 12], target = 5
result;

[ 6, 8, 10, 12 ]
  ^          ^
left        right
right is >= target so decrement

[ 6, 8, 10, 12 ]
  ^      ^
left    right
right is >= target so decrement

[ 6, 8, 10, 12 ]
  ^  ^
left right
right is >= target so decrement

[ 6, 8, 10, 12 ]
  ^^
left right
left === right -> exit and return `result` (still `-1`)

Data Structure:
starting: array of numbers
  intermediate: two pointers (anchor and runner)
ending: number

Algorithm:
- where does left start? 0 index
- where does right start? sortedNums.length - 1 index
- when does left move? only after a successful pairing has been made and the pairs sum has been saved
- when does right move? right will move when values of left + right >= target.
- does left do anything other than move? it will be used to find the lower value for the pair, if exists
- does right do anything other than move? it will be used to find the higher value for the pair, if exists
- under what condition do we stop iterating? when left is no longer less than right

1. Sort the `nums` array, save as `sortedNums`
2. Create a variable called `result` and assign a value of `-1`
3. Create a variable called `left` and assign to `0`
4. Create a variable called `right` and assign to `sortedNums.length - 1`
5. While (left < right) do...
  6a. If sum of values at `left` and `right` are greater than or equal to `target` decrement `right`
  6b. Else increment `left` and if `result` is < `sum` reassign `result = sum`
7. Return `result`
*/

function twoSumLessThanTarget(nums, target) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let result = -1;
  let left = 0;
  let right = sortedNums.length - 1;

  while (left < right) {
    const rightVal = sortedNums[right]
    const leftVal = sortedNums[left]
    const sum = rightVal + leftVal;

    if (sum >= target) {
      right -= 1;
    } else {
      if (result < sum) result = sum;
      left += 1;
    }
  }

  return result;
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// All test cases should log true
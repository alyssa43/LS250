/*
Problem: Given a sorted (ascending) array of `nums`, return `true` if there is a value that is 3x the value of another value.
  rules:
  - Do not use any built-in methods
  - Do not use indexOf or lastIndexOf
  - Do not use Array.prototype.includes
  - Time complexity should be O(N)

Example:
input: nums = [1, 3, 9, 28]
output: true

iterate through `nums` using `anchor`
`runner` will start at `anchor + 1` and only move when value at `anchor * 3` is not equal to value at `runner`
[ 1, 3, 9, 28 ]
  ^  ^ -> anchorVal = , runnerVal = 3: 1 * 3 === 3 -> return true

input: nums = [1, 2, 4, 8]
output: false
[ 1, 2, 4, 8 ]
  ^  ^ 
anchorVal = 1 
tripled = 3
runnerVal = 2
since tripled is greater than runnerVal (3 > 2) there could be another possible match, so runner++

[ 1, 2, 4, 8 ]
  ^     ^ 
runnerVal = 4:
since tripled is less than runnerVal (3 < 4) we can infer that there are no more possible numbers that could be 3x anchorVal, so anchor++ and reassign runner to anchor+1 (in the case that runner wasn't where it was already supposed to be)
  
[ 1, 2, 4, 8 ]
     ^  ^
anchorVal = 2
tripled = 6
runnerVal = 4
since tripled is greater than runnerVal (6 > 4) there could be another possible match, so runner++

[ 1, 2, 4, 8 ]
     ^     ^
runnerVal = 8
since tripled is less than runnerVal (6 < 8) we know there are no more possible matches, so anchor++ and reassign runner to anchor+1 

[ 1, 2, 4, 8 ]
        ^  ^
anchorVal = 4
tripled = 12
runnerVal = 8
since tripled is greater than runnerVal (12 > 8) there could be another possible match, so runner++

[ 1, 2, 4, 8 ]
        ^     ^
if runner extends passed array, anchor++ and reassign runner to anchor+1

[ 1, 2, 4, 8 ]
           ^   ^
We exit the loop when anchor reaches nums.length - 1 -> if we exit loop without returning `true` return `false`

Data Structure:
starting: array of sorted (ascending) numbers
  intermediate: two pointers: anchor and runner 
ending: boolean

Algorithm:
Anchor-Runner Approach Questions:
- where does anchor start: 0 index
- where does runner start: 1 index
- when do I move anchor? when value at runner is > 3x value at anchor
- when do I move runner? when value at runner is < 3x value at anchor
- does the anchor do anything besides moving? it is used to calculate 3x the value at that index
- does the anchor do anything besides moving? it is used to determine if the value at that index is equal to 3x the value at anchor
- under which condition do we stop the iteration? when runner is no longer less than array length

Initial Solution:
1. Create an iterator called `anchor` that starts at `0` and continues until no longer less than `nums.length - 1`
  2. Create an iterator called `runner` whose value is `anchor + 1`
  3. Calculate the `tripled` value by multiplying the value at `anchor` index by 3: `nums[anchor] * 3`
  4a. If the value of `triple` is equal to the value at `runner` -> return `true`
  4b. Else If the value at `runner` is greater than `tripled` -> continue to next iteration
  4c. Else begin searching using `runner`, while `runner < nums.length` do...
      6. Increment runner += 1
      7a. If the value of `tripled` is equal to the value at `runner` -> return `true`
      7b. Else If the value at `runner` is greater than `tripled` -> break out of `while` loop (anchor and runner will be increment/reassigned in `for` loop)
      7c. Else continue incrementing runner and checking until one of the above conditions occurs
8. Return `false` if `for` loop ends without an early return of `true`

Optimized Solution:
1. Create a variable called `anchor` that has a value of `0`
2. Create a variabled called `runner` that has a value of `1`
3. While `runner` is less than `nums.length` do...
  4. if value at `runner` is equal to value at `anchor` * 3 -> return true
  5. if value at `runner` is less than value at `anchor` * 3 -> increment `runner`
  6. Else increment `anchor`
7. If `true` was no returned, return `false`
*/

function checkTripleMatch(nums) {
  let anchor = 0;
  let runner = 1;
  while (runner < nums.length) {
    const tripled = nums[anchor] * 3;
    const runnerVal = nums[runner];
    if (runnerVal === tripled) {
      return true;
    } else if (runnerVal < tripled) {
      runner += 1;
    } else {
      anchor += 1;
    }
  }
  return false;
}

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);

// All test cases should log true.
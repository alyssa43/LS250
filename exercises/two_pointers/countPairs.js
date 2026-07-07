/*
Problem: Given an array of sorted (asc) `nums` and a `target` integer, count and return the number of pairs whose sum is greater than `target`

Example:
input: nums = [1, 2, 3, 4, 5] target = 6
output: 4

let pairCount = 0;

[ 1, 2, 3, 4, 5 ]
  ^           ^ NOT a valid pair, start++

[ 1, 2, 3, 4, 5 ]
     ^        ^ IS a valid pair, calculate number of pairs in section: end - start (4-1) and increment pairCount by value. THEN end--
     (pairCount === 3)

[ 1, 2, 3, 4, 5 ]
     ^     ^ NOT a valid pair, start++

[ 1, 2, 3, 4, 5 ]
        ^  ^ IS a valid pair, pairCount += 3 - 2 (pairCount === 4). end--

[ 1, 2, 3, 4, 5 ]
       ^^ Exit loop when start is no longer less than end

Data Structure:
starting: array of numbers sorted in ascending order
  intermediate: use two pointers to iterate through sorted num array 
ending: number

Algorithm:
1. Create a variable called `pairCount` and assign a value of `0`
2. Create a variable called `start` and assign it a value of `0`
3. Create a variable called `end` and assign it a value of `nums.length - 1`
4. While (start < end) do...
  5. If `nums[start] + nums[end] > target`, increment `pairCount` by value of `end - start` and decrement `end -= 1`
  6. Else increment `start += 1`
7. Return `pairCount`
*/

function countPairs(nums, target) {
  let pairCount = 0;
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start] + nums[end] > target) {
      pairCount += end - start;
      end -= 1;
    } else {
      start += 1;
    }
  }
  return pairCount;
}

console.log(countPairs([1, 2, 3, 4, 5], 0) === 10);
// Pairs: (1, 2), (1, 3), (1, 4), (1, 5), (2, 3)
// (2, 4), (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 6) === 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) === 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) === 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) === 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) === 0);
// No pairs

console.log(countPairs([1, 2], 0) === 1);
// Pairs: (1, 2)
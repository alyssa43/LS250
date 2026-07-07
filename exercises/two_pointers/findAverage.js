/*
Problem: Given an array of numbers (`nums`), and an integer (`k`), find all contiguous subarrays that are equal in length to `k`. 
Then find the average of each subarray, and return those values (within an array).

  assumptions & decisions:
    - input array will only contain integers
    - return array may contain float rounded to the nearest tenth
    - `k` will always be greater than 0, and less than or equal to nums.length

  I will be using two pointers to represent a subarray "window":
  1. Where does my anchor pointer start? Starts at the `0` index
  2. Where does my runner pointer start? Starts at the `k` index
  3. Under which condition do I move the anchor pointer? On each iteration
  4. Under which condition do I move the runner pointer? On each iteration
  5. Does the anchor pointer do something besides moving? It will be used to subtract the previous value from sum
  6. Does the runner pointer do something besides moving? It will be used to add the current value to sum
  7. Under which condition do we stop the iteration? When the runner is no longer less than the array length

Example:
input: nums = [1, 2, 3, 4, 5, 6] k = 3  output: [ 2, 3, 4, 5 ]
result = [ ]
grab the first `k` elements: [1, 2, 3] and sum => 6
calculate avg of current `sum` and push to `result`
start an anchor at `0` and runner at `k`

result = [2]
sum = 6
[ 1, 2, 3, 4, 5, 6]
  ^        ^
anchor    runner

add value at `runner` to `sum` (6 + 4 = 10)
subtract value at `anchor` from `sum` (10 - 1 = 9)
calculate avg of current `sum` and push to `result`
increment `anchor` and `runner`

result = [2, 3]
sum = 9
[ 1, 2, 3, 4, 5, 6]
     ^        ^
  anchor    runner

add value at `runner` to `sum` (9 + 5 = 14)
subtract value at `anchor` from `sum` (14 - 2 = 12)
calculate avg of current `sum` and push to `result`
increment `anchor` and `runner  

result = [2, 3, 4]
sum = 12
[ 1, 2, 3, 4, 5, 6]
        ^        ^
      anchor    runner

add value at `runner` to `sum` (12 + 6 = 18)
subtract value at `anchor` from `sum` (18 - 3 = 15)
calculate avg of current `sum` and push to `result`
increment `anchor` and `runner`  

result = [2, 3, 4, 5]
sum = 15
[ 1, 2, 3, 4, 5, 6]
           ^        ^
        anchor    runner

runner is no longer < nums.length -> exit and return result

Data Structure:
beginning: array
  intermediate: an array of averages -> which will be used for return value
ending: array

High-Level Algorithm:
1. Create an empty array called `result`
2. Find the first `k` elements in given array of `nums` and calculate their `sum`
3. Calculate the `avg` of `sum` and add to `result` array
5. Create variable called `anchor` that has a value of `0`
4. Create another iterator `runner` that starts at `k` and ends when no longer  less than `nums.length`
  6. Add the value at the `runner` index to `sum`
  7. Subtract the value at the `anchor` index from `sum`
  8. Calculate the average of `sum` and push to `result`
  9. increment `anchor` by `1`
10. Return `result`
*/

function sumFirstKNums(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i += 1) {
    sum += nums[i];
  }
  return sum;
}

function findAverages(nums, k) {
  const result = [];
  let sum = sumFirstKNums(nums, k);
  result.push(sum / k);
  let anchor = 0;
  for (let runner = k; runner < nums.length; runner += 1) {
    sum += nums[runner];
    sum -= nums[anchor];
    result.push(sum / k);
    anchor += 1;
  }
  return result;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
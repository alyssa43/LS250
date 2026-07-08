/*
Problem: Given a positive integer, `num`, return `true` if `num` is a square integer, or `false` otherwise.
  rules:
    - Do not use any square root built-in methods provided by the Math library
    
Example:
input: 1
output: true
array of nums [1...num] -> [1] -> is 1 ** 2 === 1 YES -> return true

input: 4
output: true 
left = 1, right = num (4)
mid = 1 + 4 = 5 / 2 => 2
  is mid ** 2 === num => yes -> return true

input: 16
output: true
left = 1, right = num (16)
mid = 1 + 16 = 17 / 2 => 8
  midSquared = 8 ** 2 => 64
  is 64 === 16 => NO
  is 64 < 16 => NO -> move search to left `right = mid - 1`

left = 1, right = 7
mid = 1 + 7 = 8 / 2 => 4
  midSquared = 4 ** 2 => 16
  is 16 === 16 => YES -> return `true`

input: 14
output: false
left = 1, right = num (14)
mid = 1 + 14 = 15 / 2 => 7
  midSquared = 7 ** 2 => 49
  is 49 === 14 => NO 
  is 49 < 14 => NO -> move search to left `right = mid - 1`

left = 1, right = 6
mid = 1 + 6 => 7 / 2 => 3
  midSquared = 3 ** 2 => 9
  is 9 === 14 => NO
  is 9 < 14 => YES -> move search to right `left = mid + 1`

left = 4, right = 6
mid = 4 + 6 = 10 / 2 => 5
  midSquared = 5 ** 2 => 25
  is 25 === 14 => NO
  is 25 < 14 => NO -> move search to left `right = mid - 1`

left = 4, right = 4
mid = 4 + 4 = 8 / 2 => 4
  midSquared = 4 ** 2 => 16
  is 16 === 14 => NO
  is 16 < 14 => NO -> move search to left `right = mid - 1`

left = 4, right = 3 -> EXIT LOOP and return `false`

Data Structure:
starting: positive integer
  intermediate: pointers to represent a binary search in a range of numbers
ending: boolean

Algorithm:
1. Create a variable called `left` and assign to a value of `1`
2. Create a variable called `right` and assign to the value of `num`
3. While (left <= right) do...
  4. Create a variable called `mid` and assign to the value of `Math.floor((left + right) / 2)
  5a. If `mid ** 2 === num` return true;
  5b. If `mid ** 2 < num` move search to right by reassigning `left = mid + 1`
  5c. Else, move search to left by reassigning `right = mid - 1`
6. Return `false` if `true` wasn't returned from within loop
*/

function isSquareInteger(num) {
  let left = 1;
  let right = num;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSquared = mid ** 2;
    if (midSquared === num) {
      return true;
    } else if (midSquared < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.
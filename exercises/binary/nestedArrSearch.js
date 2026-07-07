/*
Problem: Given a `matrix` array where each element is a subarray of sorted integers, and a `target` integer, return `true` if `target` is located within one of the subarrays.
  rules:
    - each subarray is sorted in ascending order
    - the first element of each subarray is larger than the final element of the preceding subarray
    - time complexity should be O(log(M*N))

Example:
input: matrix = [[4, 8, 12], [16, 20, 24], [28, 32, 36]], target = 20 
output: true

find subarray: 
left = 0, right = matrix.length - 1 (2)
subarrIndex = left + right / 2 -> 0 + 2 = 2 / 2 => 1
subarr = matrix[subarrIndex] => [16, 20, 24]
is subarr[0] >= target ? Yes -> is subarr[subarr.length - 1] <= target ? Yes -> return subarrIndex

subarr found => [16, 20, 24]
left = 0, right = subarr.length - 1 (2)
mid = 0 + 2 = 2 / 2 => 1
  is value at `subarr[mid] === target` ? YES -> return true

Data Structure:
starting: nested array of subarrays containing sorted (ascending) numbers
  intermediate: use pointers to binary search arrays
ending: boolean

Algorithm:
High-Level:
1. Find the subarray that could hold the target value (binary search) (if none exist, return false)
2. Search the subarray (binary search) for the target value
3. If target value was found, return true else return false

Helpers: 
defaultCompare(arr, mid, target) - Will be used as the default matching conditions for `binarySearch`
1. Return `0` if value at `arr[mid] === target`
2. Return `1` if value at `arr[mid] < target`
3. Return `-1` if value at `arr[mid] > target`
 
binarySearch(array, target, compareMethod) - returns index of `mid` when `condition` is true, or -1 
1. Create a variable called `left` and assign a value of `0`
2. Create a variable called `right` and assign a value of `array.length - 1`
3. While `left <= right` do...
  4. Create a variable called `mid` and assign a value of `Math.floor((left + right) / 2)`
  5. Create a variable called `result` and assign to return value of `compare(arr, mid, target)`
  5a. If `result === 0` -> return `mid`
  5b. If `result === 1` -> reassign `left = mid + 1`
  5c. If `result === -1` -> reassign `right = mid - 1`
6. return -1

findPossibleSubarrayIndex(matrix, target) - returns index of possible subarray, or -1 if doesn't exist
1. Create a helper `compareRow` method that takes `matrix` and `target` as arguments: (steps below)
  2. Create a variable called `helper` that is assigned to the value of `matrix[mid]` (mid will be in closure of `binarySearch`)
  3. If `row[0] <= target && target <= row[row.length - 1]` return `0`
  4. If `row[row.length - 1] < target` return `1` (to move search area to right)
  5. IF `row[row.length - 1] > target` return `-1` (to move search area to left)

2. Return the value of invoking `binarySearch(matrix, target, compareRow)` to find the index of the possible subarray where `target` may be located, and save 
*/

const defaultCompare = (arr, mid, target) => {
  if (arr[mid] === target) return 0;
  return arr[mid] < target ? 1 : -1;
}

function binarySearch(arr, target, compare = defaultCompare) {
  let left = 0
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const result = compare(arr, mid, target)
    if (result === 0) {
      return mid;
    } else if (result === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1
}

function findPossibleSubarrayIndex(matrix, target) {
  const compareRow = (matrix, mid, target) => {
    const row = matrix[mid];
    if (row[0] <= target && target <= row[row.length - 1]) return 0;
    return row[row.length - 1] < target ? 1 : -1
  };

  return binarySearch(matrix, target, compareRow);
} 

function findInNestedArray(matrix, target) {
  const subarrIndex = findPossibleSubarrayIndex(matrix, target);
  if (subarrIndex === -1) return false;
  return binarySearch(matrix[subarrIndex], target) !== -1;
}

console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.
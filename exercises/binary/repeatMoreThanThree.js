/*
Given an array nums, sorted in ascending order (where elements are equal to or increase as you move through the array), determine if a specified number, target, appears more than three times in the array. The function should return true if target is found at least four times, and false otherwise.

Problem: Given an array of `nums` which are sorted in ascending order, and a `target` integer, return `true` if `target` appears more than 3 times in `nums`, or `false` otherwise.
  rules:
    - `nums` will always be sorted in ascending order
    - `nums` may have duplicate values
    - return `true` if `target` appears *at least* 4 times
    - return `false` otherwise

Example:
input: nums = [1, 2, 3, 3, 3, 3, 4] target = 3
output: true

find leftMost value that is equal to target
[1, 2, 3, 3, 3, 3, 4]
       ^ -> (if value wasn't found we can infer that `target` is not within `nums` at all and can stop looking and just return false)

now we find rightMost value that is equal to target
[1, 2, 3, 3, 3, 3, 4]
                ^
leftMost = 2
rightMost = 5
we now know that indices 2, 3, 4, and 5 all hold the `target` value -> rightMost - leftMost => 5 - 2 = 3
this tells us that if `rightMost - leftMost >= 3` we return `true`, else we return `false`

Data Structure:
starting: array of sorted ascending numbers
  intermediate: binary search of `nums`
ending: boolean

Algorithm:
High-Level:
1. Using binary search, find the `leftMost` index where value is equal to `target`
2. If no `leftMost` index was found, return `false`.
3. Using binary search, find the `rightMost` index where value is equal to `target`
4. Return `true` if `rightMost - leftMost >= 3`, else return `false`

Helpers:
findLeftMost(nums, target) -> return index of left most index that matches `target`, or `-1` if no such index matches `target`
1. Create a variable called `left` and assign to a value of `0`
2. Create a variable called `right` and assign to a value of `nums.length - 1`
3. Create a variable called `leftMost` and assign to a value of `-1`
4. While `left <= right` do...
  5. Create a variable called `mid` and assign to the value of `Math.floor((left + right) / 2)`
  6a. If value at `nums[mid] < target`, move search right by reassigning `left = mid + 1`
  6b. Else, move search left by reassigning `right = mid - 1`
  7. If value at `nums[mid] === target` reassign `leftMost` to `mid`
8. Return `leftMost`

findRightMost(nums, target) -> return index of right most index that matches `target`, or `-1` if no such index matches `target`
1. Creat a variable called `left` and assign to a value of `0`
2. Create a variable called `right` and assign to a value of `nums.length - 1`
3. Create a variable called `rightMost` and assign to a value of `-1`
4. While `left <= right` do...
  5. Create a variable called `mid` that has a value of `Math.floor((left + right) / 2)
  6a. If value at `nums[mid] > target`, move search left by reassigning `right = mid - 1`
  6b. Else, move search right by reassigning `left = mid + 1`
  7. If value at `nums[mid] === target`, reassign `rightMost` to `mid`
8. Return `rightMost`
*/

/*
Refactoring solution: will finish another time

const findLeftMost = (nums, target) => findBoundary(nums, target);
const findRightMost = (nums, target) => findBoundary(nums, target, 'right');

const pointerPositions = (left, right, mid, direction) => {
  const moveLeft = [ left, mid - 1 ];
  const moveRight = [ mid + 1, right ];
  return direction === 'left' ? moveLeft : moveRight;
}

function findBoundary(nums, target, direction = 'left') {
  let left = 0;
  let right = nums.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      boundaryIndex = mid;
      [ left, right ] = pointerPositions(left, right, mid, direction)
      // [left, right] = direction === 'left' ? [left, mid-1] : [mid+1, right];
    } else if (nums[mid] < target) {
      [ right, left ] = pointerPositions(left, right, mid, direction)
      // [left, right] = direction === 'left' ? [mid+1, right] : [left, mid-1];
    } else {
      [left, right] = direction === 'left' ? [left, mid-1] : [mid+1, right];
    }
  }
  return boundaryIndex;
}
*/

function isTargetFrequent(nums, target) {
  const leftMostIndex = findLeftMost(nums, target);
  if (leftMostIndex === -1) return false;
  const rightMostIndex = findRightMost(nums, target);
  return rightMostIndex - leftMostIndex >= 3;
}

function findLeftMost(nums, target) {
  let left = 0;
  let right = nums.length - 1
  let leftMost = -1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    if (nums[mid] === target) leftMost = mid;
  }
  return leftMost;
}

function findRightMost(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let rightMost = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    if (nums[mid] === target) rightMost = mid;
  }
  return rightMost;
}

console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.
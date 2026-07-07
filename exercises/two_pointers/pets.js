/*
Problem: Given two arrays `appetite` and `treats`, calculate the number of `treats` that are "acceptable"
  rules:
    - an "acceptable" treat size is >= an appetite size

Example:

input: [3, 4, 2] and [1, 2, 3] output: 2
appetite  = [3, 4, 2] -> sorted [2, 3, 4]
treats    = [1, 2, 3] -> sorted [1, 2, 3]

treats        appetite
[ 1, 2, 3 ]  [ 2, 3, 4 ]
  ^            ^ -> treat is < appetite, treat++

treats        appetite
[ 1, 2, 3 ]  [ 2, 3, 4 ]
     ^         ^ -> treat is >= appetite, treatCount++, treat++, appetite++

treats        appetite
[ 1, 2, 3 ]  [ 2, 3, 4 ]
        ^         ^ -> treat is >= appetite, treatCount++, treat++, appetite++

treats        appetite
[ 1, 2, 3 ]  [ 2, 3, 4 ]
           ^         ^ -> No more treats, return treatCount

Data Structure:
starting: two arrays
  intermediate: sort both input arrays (non-mutate)
ending: number

Algorithm:
1. Sort both the `appetite` and `treats` array
2. Create a variable called `treatCount` and assign to `0`
2. Create a variable called `appetiteIndex` and assign to `0`
3. Using a `for` loop, create an iterator, `treatIndex`, that starts at `0` and continues while < `treats.length`
  4. Determine if the `treat` at `treatIndex` is >= `appetite` at `appetiteIndex`: 
    4a. if it is: increment `treatCount` and `appetiteIndex`
    4b. if `appetiteIndex` >= `appetite` Length return `appetiteCount` (more treats than appetites)
5. Return `appetiteCount`
*/

function assignTreats(appetite, treats) {
  const sortedAppetite = [...appetite].sort((a, b) => a - b)
  const sortedTreats = [...treats].sort((a, b) => a - b);
  let treatCount = 0;
  let appetiteIndex = 0;
  for (let treatIndex = 0; treatIndex < sortedTreats.length; treatIndex += 1) {
    if (sortedTreats[treatIndex] >= sortedAppetite[appetiteIndex]) {
      treatCount += 1;
      appetiteIndex += 1;
      if (appetiteIndex >= sortedAppetite.length) return treatCount;
    }
  }
  return treatCount;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true.
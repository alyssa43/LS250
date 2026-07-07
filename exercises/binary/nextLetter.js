/*
Problem: Given an array or lowercase `chars` in ascending order, and a `key` that is also a lowercase letter. Find and return the smallest `char` in `chars` that is greater than the given `key`. If no such letter exists, return the first letter in `chars`.

Example:

When first char is returned (no smallest letter is found):
input: chars = ['b', 'd', 'f'] key = 'a'
output: 'b'
left = 0
right = chars.length - 1 (2)

WHILE left <= right ? YES -> calculate mid = left + right / 2 (floored) -> 0 + 2 = 2 / 2 => 1
  is char at mid > key ? ('d' > 'a' => true) YES -> shift left -> `right = mid - 1` (right is now 0)

  is left <= right still? YES -> calculate mid = left + right / 2 -> 0 + 0 = 0 / 2 => 0
  is char at mid > key ? ('b' > 'a' => true) YES -> shift left -> `right = mid - 1` (right is now -1)
  
  is left <= right still ? NO -> EXIT LOOP
    -> return `char` at `left` index (chars[left] => 'b')

When key occurs in chars:
input: chars = ['b', 'd', 'f']  key = 'f'
output: 'b'
left = 0
right = chars.length - 1 (2) 

WHILE left <= right ? YES -> calculate mid = left + right / 2 -> 0 + 2 = 2 / 2 => 1
  is char at mid > key ? ('d' > 'f' => false) NO -> shift right -> `left = mid + 1` (left is now 2)

  is left <= right still? YES -> calculate mid = left + right / 2 => 2 + 2 = 4 / 2 => 2
  is char at mid > key ? ('f' > 'f' => false) NO -> shift right -> `left = mid + 1` (left is now 3)

  is left <= right still ? NO -> EXIT LOOP 
    -> `left` is out of bounds, so return `chars[0]` => 'b'

When duplicate characters occur in input
input: chars = ['a', 'a', 'b', 'c'] key = 'a'
output: 'b'
left = 0
right = chars.length - 1 (3)

WHILE left <= right ? Calculate mid = left + right / 2 -> 0 + 3 = 3 / 2 => 1
  is char at mid > key ? ('a' > 'a' => false) NO -> shift right -> `left = mid + 1` (left is now 1)

  is left <= right still ? YES -> calculate mid = left + right / 2 => 1 + 3 = 4 / 2 => 2
  is char at mid > key ? ('b' > 'a' => true) YES -> shift left -> `right = mid - 1` (right is now 1)

  is left <= right still ? YES -> calculate mid = left + right / 2 => 1 + 1 = 2 / 2 => 1
  is char at mid > key ? ('a' > 'a' => false) NO -> shift right -> `left = mid + 1` (left is now 2)
  
  is left <= right still ? NO -> EXIT LOOP
    -> return char at `left` index -> `chars[left]` => 'b'

Data Structure:
starting: sorted array of ascending letters
  intermediate: binary search using `left`, `right` and `mid` pointers
ending: letter from within input array

Algorithm:
1. Create a variable called `left` and assign a value of `0`
2. Create a variable called `right` and assign a value of `chars.length - 1`
3. While `left <= right` do...
  4. Create a variable called `mid` and assign a value of `Math.floor((left + right) / 2)
  5a. If character at `mid` index is greater than `key`, shift search window to left by reassigning `right` to `mid - 1`
  5b. Else shift search window to right by reassigning `left` to `mid + 1`
6a. If `left` index is out of bounds return character at `0` index
6b. Else return character at `left` index
*/

function findNextLetter(chars, key) {
  let left = 0;
  let right = chars.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (chars[mid] > key) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left === chars.length ? chars[0] : chars[left];
}

console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.
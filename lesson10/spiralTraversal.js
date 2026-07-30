// You are given a 2D matrix of integers. Your task is to traverse the matrix
// in a spiral order, starting from the top-left corner and moving clockwise.
// Return an array containing all elements of the matrix in the order they
// are visited during the spiral traversal.

// The spiral order moves right, then down, then left, then up, and repeats
// this pattern until all elements have been visited.

// Example 1:
// Input:
// [
//  [10, 20, 30],
//  [40, 50, 60],
//  [70, 80, 90]
// ]
// Output: [10, 20, 30, 60, 90, 80, 70, 40, 50]

// Example 2:
// Input:
// [
//  [1,  2,  3,  4],
//  [5,  6,  7,  8],
//  [9,  10, 11, 12],
//  [13, 14, 15, 16]
// ]
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

function spiralTraversal(matrix) {
  // Your implementation here
}

// Test cases
console.log(spiralTraversal([
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
])); // Expected output: [10, 20, 30, 60, 90, 80, 70, 40, 50]

console.log(spiralTraversal([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
])); // Expected output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

console.log(spiralTraversal([
  [5, 10],
  [15, 20]
])); // Expected output: [5, 10, 20, 15]

console.log(spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
])); // Expected output: [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
])); // Expected output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
])); // Expected output: [1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9]

console.log(spiralTraversal([
  [42]
])); // Expected output: [42]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5, 6]
])); // Expected output: [1, 2, 3, 4, 5, 6]

console.log(spiralTraversal([
  [1],
  [2],
  [3],
  [4],
  [5],
  [6]
])); // Expected output: [1, 2, 3, 4, 5, 6]
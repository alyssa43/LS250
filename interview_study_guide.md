# Interview Study Guide

This interview will assess your understanding of Data Structures and Algorithms, with a particular focus on problem-solving skills. Please prepare thoroughly using this study guide. Refer to the course policy for information on retakes.

During the interview, you will be given a coding challenge to solve within 45 minutes. You are expected to follow the problem-solving approach covered in our course:

1. Understand the problem
2. Develop examples/test cases
3. Choose appropriate data structures and algorithms
4. Verify your algorithm against the examples
5. Implement your solution

## Test Cases and Problem-Solving Approach

As part of the assessment:

- You will be given an initial problem statement
- You are expected to develop your own test cases to cover various scenarios, including edge cases
- Demonstrate your problem-solving approach step-by-step
- If desired, you may use the Drawing tool on Coderpad to illustrate your thought process

You will be evaluated on your ability to:

- Construct and articulate a clear plan for solving the given problem
- Apply appropriate data structures and algorithms to the problem at hand
- Write clean, efficient, and well-documented code
- Validate your assumptions and debug any issues that arise
- Identify opportunities for optimization in your solution

You will not be presented with a problem that utilizes Graphs (general graphs only; binary trees may appear), Backtracking, or Dynamic Programming during the interview. That said, these algorithms are important for a job hunt, so we strongly encourage you to go through all of these topics carefully.

## Communication and Presence

During the interview, aim to:

- Think, speak, and code deliberately
- Use accurate terminology and concepts
- Maintain composure and a methodical approach

**Note For CoderPad**

We will use Coderpad during the assessment. CoderPad runs JavaScript code in *strict mode*. While you don't need to be familiar with all facets of strict mode, there is one aspect that may arise during this assessment: the implicit execution context is `undefined`, **not** the global object. That means that the value of `this` may be `undefined` at times. For instance:

```js
function foo() {
  console.log(this);
}

foo(); // undefined
```

Be prepared for this change before the interview. If you wish to practice on your own system instead of on CoderPad, add `"use strict";` to the top of your JavaScript code:

```js
"use strict"; // the quotes are required

function foo() {
  console.log(this);
}

foo(); // undefined
```
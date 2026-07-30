/*
Given a singly linked list and a specific value (referred to as the 'key'), your task is to determine how many times this key appears within the linked list. For instance, given a linked list like 1->2->1->2->1->3->1 and a key of 1, the expected result would be 4, as the key 1 appears four times in the list.

Problem: 

Example:

Data Structures:

Algorithm:

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

let list1 = createLinkedList([1, 2, 1, 2, 1, 3, 1]);
let list2 = createLinkedList([4, 4, 4, 4]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([5, 5, 1, 2, 3, 5, 5]);
let list5 = createLinkedList([]);
let list6 = createLinkedList([1, 2, 3, 1, 1]);

console.log(countKeyOccurrences(list1, 1) === 4);
console.log(countKeyOccurrences(list2, 4) === 4);
console.log(countKeyOccurrences(list3, 1) === 1);
console.log(countKeyOccurrences(list4, 5) === 4);
console.log(countKeyOccurrences(list5, 1) === 0);
console.log(countKeyOccurrences(list6, 1) === 3);

// All test cases should log true.



/*
Solution and Discussion:
Solution
Copy Code
function countKeyOccurrences(head, key) {
  let count = 0;
  let curr = head;
  while (curr !== null) {
    if (curr.val === key) {
      count++;
    }
    curr = curr.next;
  }
  return count;
}
Discussion
In this problem, we simply iterate through the linked list. If the val property of a node matches the key, we increment the count by 1 and slide the curr pointer. If the val property is different, we simply slide the curr pointer. In the end, we return the count.

Here is the visual walkthrough:

Initializing the Necessary Variables
In the first step, we initialize the curr variable to point to the same node as the head variable and initialize the count to 0. The key is the number 1.

Visual Walkthrough Count Occurrences Current Variable

Iteration Step 1
We will iterate through the list, continuing as long as curr doesn't point to null. During each iteration, we will check if the current node's value (curr.val) is equal to the key value (1). If it is, we will increment the count by 1 and slide the curr pointer. If not, we will simply slide the curr pointer. In the first iteration, the former is true, so we increment the count and solid the curr pointer (curr = curr.next).

Visual Walkthrough Iteration Step 1

Iteration Step 2
In the next step, the value of the node that curr variable points to is not equal to 1 so we simply slide the curr variable (curr = curr.next).

Visual Walkthrough Iteration Step 2

Iteration Step 3
In the third iteration step, the value of the node that curr variable points to is equal to 1, so we increment the count variable and slide the curr pointer (curr = curr.next).

Visual Walkthrough Iteration Step 3

The Final Step
In the final step, the value of the node the curr variable points to is, once again, equal to 1, so we increment the count and slide the curr pointer (curr = curr.next). At the end of this iteration, the curr pointer points to null, so we end the loop and return the count.

Visual Walkthrough Iteration Step 4
*/
/*
Given the starting node (head) of a singly linked list, your task is to find whether the linked list contains a loop. A loop in a linked list exists when a node can be revisited by continuously following the next pointers.

You should return true if the linked list forms a loop (sometimes referred to as a circular list or a cyclic list) and false if it does not.

This problem is very tricky. Try it for 15-20 minutes and then check the provided Hint
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr, cyclePos) {
  let head = new ListNode(0);
  let current = head;
  let cycleNode = null;

  arr.forEach((val, index) => {
    current.next = new ListNode(val);
    current = current.next;
    if (index === cyclePos) {
      cycleNode = current;
    }
  });

  if (cycleNode) {
    current.next = cycleNode;
  }

  return head.next;
}

let list1 = createLinkedList([3, 2, 0, -4], 1);
let list2 = createLinkedList([1, 2], 0);
let list3 = createLinkedList([1], -1);
let list4 = createLinkedList([10, 20, 30, 40, 50, 60], 3);
let list5 = createLinkedList([5, 15, 25, 35, 45], -1);

console.log(hasCycle(list1)); // true
console.log(hasCycle(list2)); // true
console.log(hasCycle(list3)); // false
console.log(hasCycle(list4)); // true
console.log(hasCycle(list5)); // false

/* Hint
Consider the scenario of a tortoise and a hare racing around a track. If the track forms a loop, the hare, moving at a faster pace, will eventually overlap the tortoise.

Apply this concept using two pointers, named slow and fast, in the context of traversing a linked list. The slow pointer advances one node at a time, while the fast pointer progresses two nodes in each step. If the linked list contains a loop, the fast pointer will eventually meet the slow pointer, signifying the presence of a loop.

*/

/* Solution & Discussion

Solution

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
Discussion
The function hasCycle uses two pointers, slow and fast, which move through the list at different speeds. The slow pointer moves one node at a time, while fast moves two nodes. If there is a loop, the fast pointer will eventually meet the slow pointer within the loop. If fast reaches the end of the list (null), it means there is no cycle. This algorithm is called "Floyd's Tortoise and Hare algorithm".

Here is the visual walkthrough:

Visual Walkthrough Has Cycle True

Visual Walkthrough Has Cycle False
*/
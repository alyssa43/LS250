/*
Remove Duplicates
Given the head of a sorted singly linked list, eliminate any duplicate elements, ensuring each value in the list is unique. The resulting linked list must remain sorted. Modify the linked list and return the head of the revised, duplicate-free list.
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

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
      listStr += currentNode.val + ' -> ';
      currentNode = currentNode.next;
  }
  listStr += 'null'; // Indicate the end of the list
  console.log(listStr);
}

let list1 = createLinkedList([1, 1, 2]);
let list2 = createLinkedList([1, 1, 2, 3, 3]);
let list3 = createLinkedList([1, 2, 3, 3, 4]);
let list4 = createLinkedList([2, 2, 2, 3, 3]);
let list5 = createLinkedList([5]);

printLinkedList(deleteDuplicates(list1)); // Expected: "1 -> 2 -> null"
printLinkedList(deleteDuplicates(list2)); // Expected: "1 -> 2 -> 3 -> null"
printLinkedList(deleteDuplicates(list3)); // Expected: "1 -> 2 -> 3 -> 4 -> null"
printLinkedList(deleteDuplicates(list4)); // Expected: "2 -> 3 -> null"
printLinkedList(deleteDuplicates(list5)); // Expected: "5 -> null"


/* Solution and Discussion
Solution

function deleteDuplicates(head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}
Discussion
The deleteDuplicates function iterates through the linked list. It checks if the current node's value is equal to the next node's value. If they are the same, it skips the next node by changing the next pointer of the current node. This effectively removes the duplicate. The iteration continues until the end of the list.

Once again, this is easier to demonstrate with the visual aid.

GOAL
We are given a linked list 1 -> 1 -> 2 -> 3 -> 3, and our goal is to remove all duplicates, resulting in the list 1 -> 2 -> 3.

Visual Walkthrough Remove Duplicates Goal

Initializing the Necessary Variables
Like in the previous problem, we only need to introduce one additional variable, curr, which will keep track of the current node in the list

Visual Walkthrough Remove Duplicates Current Variable

Iteration Step 1
We will iterate through the list, continuing as long as neither curr nor curr.next point to null. During each iteration, we will:

Check if the node following the current node (curr.next) has the same value as the current node (curr). If it does, we will bypass the duplicate by adjusting the link so that curr.next points to curr.next.next. This action is why we need to ensure curr.next is not null in the while loop condition; otherwise, we could encounter an error.

If the next node (curr.next) has a different value from the current node (curr), we will simply advance to the next node by setting curr to curr.next.

Visual Walkthrough Remove Duplicates Step 1

Iteration Step 2
In the next step, since curr.next.val is not equal to curr.next.next.val (as 2 is different from 3), we will simply move the curr pointer forward by doing curr = curr.next.

Visual Walkthrough Remove Duplicates Step 2

Iteration Step 3
In the third iteration step, the values of the curr.next and curr.next.next nodes are identical, so we will adjust curr.next to point directly to curr.next.next instead.

Visual Walkthrough Remove Duplicates Step 3

The Final Step
We have reached the condition where curr.next is pointing to null. Therefore, we exit the loop and return the head node.

Visual Walkthrough Remove Duplicates Step 4
*/

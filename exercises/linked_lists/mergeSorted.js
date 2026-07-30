/*
Given two sorted singly linked lists, your task is to combine them into a single sorted linked list. The new list should be composed of the nodes from the two original lists and should also be sorted in ascending order (where node values are equal to or increase as you move through the linked list).
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
  let current = head;
  let listStr = '';
  while (current !== null) {
    listStr += current.val + ' -> ';
    current = current.next;
  }
  listStr += 'null';
  console.log(listStr);
}

let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

let list3 = createLinkedList([1, 2, 3]);
let list4 = createLinkedList([]);
printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> null

let list5 = createLinkedList([]);
let list6 = createLinkedList([1]);
printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> null

let list7 = createLinkedList([1, 5, 9]);
let list8 = createLinkedList([2, 4, 6, 8, 10]);
printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null

let list9 = createLinkedList([1, 2, 5]);
let list10 = createLinkedList([3, 6, 7]);
printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null


/* Hint
In this problem, using a dummy node can be helpful.
*/

/* Solution & Discussion

Solution

function mergeSortedLists(list1, list2) {
  let dummy = new ListNode(0);
  let curr = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 === null ? list2 : list1;

  return dummy.next;
}

Discussion
The mergeSortedLists function takes two sorted linked lists and merges them into one sorted list. It uses a dummy node to simplify edge cases and maintains a current pointer to build the new list. In each iteration, it compares the values of the current nodes of the two lists, appending the smaller value to the merged list and advancing in the respective list. If one of the lists is exhausted, it appends the remaining part of the other list to the merged list.

Let's explain this in more detail with the help of visual aids and our lovely cats.

GOAL
Initially, we are provided with two sorted linked lists. The head of the first linked list is represented by the variable list1 (1 -> 2 -> 5 -> null) and the head of the second linked list is denoted by the variable list2 (3 -> 6 -> 7 -> null). Our objective is to merge these two linked lists into a single sorted linked list, resulting in 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null.

Visual Goal of the Problem

Introducing Dummy
In this problem, since we do not know which will be the head of the merged linked list—either the head of list1 or of list2—this serves as a hint that we should probably leverage a dummy node. Remember, dummy nodes are an excellent tool for solving linked list problems when the head node of the result list is unknown at the beginning.

Visual Introducing Dummy

Keeping Track of the Current Node
With the dummy node in place, the initial setup is nearly complete. The only remaining step is to introduce another variable, curr, which will track the current node during the iteration. We will initialize curr to point to the dummy node at the beginning.

Visual Adding Current Variable

Iteration Step 1
In this step, we will initiate the iteration process, which will proceed as follows:

We will compare the values of the nodes that the variables list1 and list2 point to.
Next, we will set curr.next to point to the node with the smaller value. For this example, this is the value that list1 points as 1 is smaller than 3.
Then, we will move curr to its next node by updating it: curr = curr.next.
The final step involves advancing the variable that points to the node with the smaller value (in this case, list1) so that it points to the subsequent node in its list.
Note that at the end of this step, the dummy.next points to the node with the value 1, which will be the head of the merged list in the end.

Visual Iteration Step 1

Iteration Step 2
In the next step, we will continue with the same iteration process.

First, we compare the values of the nodes that variables list1 and list2.
Next, we set curr.next to point to the node with the smaller value. Once again, this will be the node list1 points to as 2 is smaller than 3.
Then, we move curr to its next node by updating it: curr = curr.next.
Finally, we advance the variable that points to the node with the smaller value (in this case, list1) so that it points to the subsequent node in its list.
Visual Iteration Step 2

Iteration Step 3
Since the process is identical to the previous steps, let's concentrate solely on the visuals.

Visual Iteration Step 3

Iteration Step 4
Visual Iteration Step 4

The Final Step
Once either list1 or list2 reaches null, our iteration is complete. This situation occurred at the end of the previous step because list1 is now pointing to null. The final step is to link curr.next to list2. We don't need to perform any further iterations because by connecting curr.next to list2, the nodes 5 and 6 will automatically be linked, with 6 already connected to 7. The only action remaining is to return dummy.next, which, as a reminder, serves as the head of our newly merged list.

Visual Iteration Step 5

Further Exploration
If you solved the problem using a dummy node, can you do it without it?
*/
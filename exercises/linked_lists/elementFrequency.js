/*
Given the head of a singly linked list containing integers, create a new linked list where each node represents the frequency of a unique element from the original list. The order of nodes in the new list doesn't matter. Return the head of this new frequency list.
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

function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function testFrequencyList(input, expected) {
  let result = linkedListToArray(createFrequencyList(createLinkedList(input)));
  if (result.length !== expected.length) return false;
  let freq1 = new Map(), freq2 = new Map();
  for (let num of result) freq1.set(num, (freq1.get(num) || 0) + 1);
  for (let num of expected) freq2.set(num, (freq2.get(num) || 0) + 1);
  if (freq1.size !== freq2.size) return false;
  for (let [key, value] of freq1) {
    if (freq2.get(key) !== value) return false;
  }
  return true;
}

function createFrequencyList(head) {
  // Your solution here
}

// Test cases
console.log(testFrequencyList([1, 1, 2, 1, 3], [3, 1, 1]));
console.log(testFrequencyList([1, 1, 2, 2, 2], [2, 3]));
console.log(testFrequencyList([6, 5, 4, 3, 2, 1], [1, 1, 1, 1, 1, 1]));
console.log(testFrequencyList([4, 4, 4, 4], [4]));
console.log(testFrequencyList([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]));
console.log(testFrequencyList([], []));
console.log(testFrequencyList([1, 1, 1], [3]));
console.log(testFrequencyList([1, 2, 1, 2, 1, 2], [3, 3]));
// All test cases should log true.

/* Hint
Consider using a Map to keep count of the frequency of each element in the original list.
*/

/* Solution & Discussion

Solution

function createFrequencyList(head) {
  if (!head) return null;

  let frequencies = new Map();

  while (head) {
    frequencies.set(head.val, (frequencies.get(head.val) || 0) + 1);
    head = head.next;
  }

  let dummy = new ListNode(0);
  let curr = dummy;

  for (let frequency of frequencies.values()) {
    curr.next = new ListNode(frequency);
    curr = curr.next;
  }

  return dummy.next;
}

Discussion
In this problem, we apply a two-pass approach to create a frequency list from a given linked list. The key difference from a typical linked list problem lies in handling the counting and creation of the new list.

We initialize our frequencies as an empty Map. This handles the case where the input list is empty, as we need to return an empty list in this scenario.

In the solution:

First Pass (Counting Frequencies):

We iterate through the input linked list, using frequencies to count the occurrences of each value.
If a value is encountered for the first time, we set its count to 1 in the map.
If a value has been seen before, we increment its count in the map.
Second Pass (Creating Frequency List):

We create a dummy node to simplify the creation of the new list.
We iterate through the values in frequencies.
For each frequency value, we create a new node and add it to our result list.
In the end, we return the head of our newly created linked list, or dummy.next.

Time Complexity: O(N)

The time complexity of this solution is O(n), where n is the number of nodes in the input list. We make two passes: one to count frequencies and one to create the new list.

Space Complexity: O(K)

The space complexity isO(k), where k is the number of unique elements in the input list, as we store each unique element and its frequency in the Map.
*/
import { arrayToLinkedList } from "../../common/linkedlist/array-to-linkedList";
import { displayLinkedList } from "../../common/linkedlist/display-linked-list";
import { reverseLinkedList } from "../../common/linkedlist/reverse-linked-list";
import { ListNode } from "../../common/linkedlist/ListNode";
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast: ListNode = head;
  let slow: ListNode = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) return head.next;

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return head;
}

const arrayNumbers = [1, 2, 3, 4, 5, 6];
const input = arrayToLinkedList(arrayNumbers);
displayLinkedList(removeNthFromEnd(input, 4));

// by my own
//   let reversedLL = reverseLinkedList(head);

//   displayLinkedList(reversedLL, "ar");

//   let i = 1;

//   let result: ListNode | null = null;
//   let resultPointer: ListNode | null = null;
//   while (reversedLL) {
//     if (i === n) {
//       i++;
//       reversedLL = reversedLL.next;
//       continue;
//     }
//     let newNode = new ListNode(reversedLL.val);

//     if (result == null) {
//       result = newNode;
//       resultPointer = newNode;
//     } else {
//       resultPointer.next = newNode;
//       resultPointer = newNode;
//     }
//     i++;
//     reversedLL = reversedLL.next;
//   }

//   let finalAns = reverseLinkedList(result);
//   displayLinkedList(finalAns);

//   return finalAns;

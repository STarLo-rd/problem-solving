import { arrayToLinkedList } from "../../common/linkedlist/array-to-linkedList";
import { ListNode } from "../../common/linkedlist/ListNode";
import { displayLinkedList } from "../../common/linkedlist/display-linked-list";
import { reverseLinkedList } from "../../common/linkedlist/reverse-linked-list";

function isFSPalindrome(head: ListNode | null): boolean {
  let mid: number = 0;

  // implement slow and head algorithm to find the size of the linked list
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let firstHalf: ListNode = null;
  let pointerForFirstHalf: ListNode = null;

  while (fast && fast.next) {
    let newNode = new ListNode(slow.val);
    if (firstHalf === null) {
      firstHalf = newNode;
      pointerForFirstHalf = newNode;
    } else {
      pointerForFirstHalf.next = newNode;
      pointerForFirstHalf = newNode;
    }
    slow = slow.next;
    fast = fast.next.next;
    mid++;
  }

  console.log("the mid:", mid);
  if (mid % 2 !== 0) return false;

  //split the list into two lists
  let secondHalf = slow;

  displayLinkedList(firstHalf, "arr");
  displayLinkedList(secondHalf, "arr");

  let reversedSecondHalf = reverseLinkedList(secondHalf);
  displayLinkedList(reversedSecondHalf, "arr");

  while (firstHalf) {
    if (firstHalf.val === reversedSecondHalf.val) {
      firstHalf = firstHalf.next;
      reversedSecondHalf = reversedSecondHalf.next;
    } else return false;
  }
  return true;
}

const arrayNumbers = [1, 2, 3, 2, 1];
const input = arrayToLinkedList(arrayNumbers);
console.log(isFSPalindrome(input));

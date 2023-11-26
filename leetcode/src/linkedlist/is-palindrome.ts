import { arrayToLinkedList } from "../../common/linkedlist/array-to-linkedList";
import { ListNode } from "../../common/linkedlist/ListNode";
import { displayLinkedList } from "../../common/linkedlist/display-linked-list";
import { reverseLinkedList } from "../../common/linkedlist/reverse-linked-list";

function deepCopyLinkedList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let dummyHead: ListNode = new ListNode(head.val);
  let currentOriginal = head.next;
  let currentCopy = dummyHead;

  while (currentOriginal !== null) {
    currentCopy.next = new ListNode(currentOriginal.val);
    currentOriginal = currentOriginal.next;
    currentCopy = currentCopy.next;
  }

  return dummyHead;
}

function isPalindrome(head: ListNode | null): boolean {
  let dummyHead = deepCopyLinkedList(head);
  let reversedHead = reverseLinkedList(dummyHead);

  displayLinkedList(head, "Original List");
  displayLinkedList(reversedHead, "Reversed List");

  while (head && reversedHead) {
    if (head.val === reversedHead.val) {
      head = head.next;
      reversedHead = reversedHead.next;
    } else return false;
  }

  return true;
}

const arrayNumbers = [2, 1];
const input = arrayToLinkedList(arrayNumbers);
console.log(isPalindrome(input));

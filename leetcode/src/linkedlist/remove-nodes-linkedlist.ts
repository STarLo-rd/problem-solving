import { ListNode } from "../../common/linkedlist/ListNode";
import { arrayToLinkedList } from "../../common/linkedlist/array-to-linkedList";
import { displayLinkedList } from "../../common/linkedlist/display-linked-list";

function greaterOfLL(list: ListNode): number {
  let value: number = 0;

  while (list) {
    if (value < list.val) value = list.val;
    list = list.next;
  }
  return value;
}

function removeNodes(head: ListNode | null): ListNode | null {
  let result: ListNode | null = null;
  let resultPointer: ListNode | null = null;

  while (head) {
    let availableMax = greaterOfLL(head.next);
    if (availableMax <= head.val) {
      let newNode = new ListNode(head.val);
      if (result === null) {
        result = newNode;
        resultPointer = newNode;
      } else {
        resultPointer.next = newNode;
        resultPointer = newNode;
      }
    }
    head = head.next;
  }

  return result;
}

const arrayNumbers = [1, 100, 3, 4, 1, 6, 4, 3, 2, 1];
const input = arrayToLinkedList(arrayNumbers);
displayLinkedList(removeNodes(input));

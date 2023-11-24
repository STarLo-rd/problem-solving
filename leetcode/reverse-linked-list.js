import { displayLinkedList } from "./display-linked-list.js";
import { ListNode } from "./_listNode.mjs";

export function reverseLinkedList(list) {
  let prev = null;
  let current = list;

  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

import { ListNodeType } from "../utils/types.js";

export function reverseLinkedList(list: ListNodeType| null) {
  let prev: ListNodeType| null = null;
  let current = list;

  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

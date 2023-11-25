import { ListNodeType } from "./utils/types";

export function displayLinkedList(list: ListNodeType | null) {
  console.log("displayLinkedList");
  while (list) {
    console.log(list.val);
    list = list.next;
  }
}

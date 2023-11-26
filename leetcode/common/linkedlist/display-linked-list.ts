import { ListNodeType } from "../../utils/types";

export function displayLinkedList(
  list: ListNodeType | null,
  options?: string
): void {
  console.log("displayLinkedList");
  let arr = [];
  while (list) {
    if (!options) console.log(list.val);
    arr.push(list.val);
    list = list.next;
  }
  if (options) console.log(arr);
}

export function displayLinkedList(list) {
  console.log("displayLinkedList");
  while (list) {
    console.log(list.val);
    list = list.next;
  }
}

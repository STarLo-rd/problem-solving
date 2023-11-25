import { arrayToLinkedList } from "../../common/array-to-linkedList";
import { displayLinkedList } from "../../common/display-linked-list";
import { ListNode } from "../../common/ListNode";

function commonDivisor(num1: number, num2: number): number {
  let minNum = Math.min(num1, num2);
  let maxNum = Math.max(num1, num2);
  for (let i = minNum; i <= maxNum; i--) {
    if (maxNum % i == 0 && minNum % i == 0) {
      return i;
    }
  }

  return 1;
}
function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let tmp = head!;

  while (tmp && tmp.next) {
    const newNode = new ListNode(commonDivisor(tmp!.val, tmp!.next.val));
    newNode.next = tmp!.next;
    tmp!.next = newNode;
    tmp = newNode.next!;
  }
  return head;
}

const arrayNumbers = [18, 6, 10, 3];
const input = arrayToLinkedList(arrayNumbers);
displayLinkedList(insertGreatestCommonDivisors(input));

// let result: ListNode | null = new ListNode(head.val);
// let resultPointer: ListNode | null = result;

// let temp: ListNode | null = head;

//   while (temp && temp.next) {
//     let greaterDivisor = commonDivisor(temp.val, temp.next.val);
//     console.log(greaterDivisor, temp.next.val);

//     let node1 = new ListNode(greaterDivisor);

//     let node2 = new ListNode(head.next.val);

//     resultPointer.next = node1;
//     node1.next = node2;
//     resultPointer = node2;

//     temp = temp.next;
//   }

//   displayLinkedList(result, "arr");
//   return result;

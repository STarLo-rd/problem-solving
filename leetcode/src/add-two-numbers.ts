/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

import { displayLinkedList } from "../common/display-linked-list";
import { ListNode } from "../common/ListNode";
import { reverseLinkedList } from "../common/reverse-linked-list";
import { ListNodeType } from "../utils/types";

function insertAtBegin(data: number, list: ListNodeType):  ListNodeType {
  if (!list) {
    let node = new ListNode(data);
    return node;
  }

  let temp: ListNodeType = list;
  while (temp.next) {
    temp = temp.next;
  }
  let newNode = new ListNode(data);
  temp.next = newNode;

  return list;
}

var addTwoNumbers = function (l1, l2) {
  let reversedl1 = reverseLinkedList(l1);
  let reversedl2 = reverseLinkedList(l2);

  let firstNum = "";
  let secondNum = "";

  while (reversedl1) {
    firstNum += reversedl1.val;
    reversedl1 = reversedl1.next;
  }

  while (reversedl2) {
    secondNum += reversedl2.val;
    reversedl2 = reversedl2.next;
  }

  console.log("First Num:", firstNum);
  console.log("Second Num:", secondNum);

  let total = (BigInt(firstNum) + BigInt(secondNum))
    .toString()
    .split("")
    .reverse()
    .join("");

  console.log("Total:", total);

  let result = new ListNode(Number(total[0]));
  for (let i = 1; i < total.length; i++) {
    result = insertAtBegin(Number(total[i]), result);
  }

  return result;
};

var l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
var l2 = new ListNode(9, new ListNode(9, new ListNode(9)));


displayLinkedList(addTwoNumbers(l1, l2));

import { ListNode } from "./ListNode";

export function arrayToLinkedList(nums: number[]): ListNode | null {
    if (nums.length === 0) {
        return null;
    }

    const head = new ListNode(nums[0]);
    let current = head;

    for (let i = 1; i < nums.length; i++) {
        current.next = new ListNode(nums[i]);
        current = current.next;
    }

    return head;
}

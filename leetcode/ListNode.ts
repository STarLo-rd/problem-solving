import { ListNodeType } from "./utils/types";

export class ListNode {
  constructor(public val: number, public next: ListNodeType | null = null) {}
}
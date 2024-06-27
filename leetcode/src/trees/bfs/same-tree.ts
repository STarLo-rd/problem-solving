import { root } from ".";
import { TreeNode } from "../Tree";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
  
    const queue1  = [p];
    const queue2 = [q];
  
    while (queue1.length > 0 && queue2.length > 0) {
      const node1 = queue1.shift();
      const node2 = queue2.shift();
  
      if (node1 === null && node2 === null) continue;
      if (node1 === null || node2 === null) return false;
      if (node1?.val !== node2?.val) return false;
  
      queue1.push(node1?.left);
      queue1.push(node1?.right);
      queue2.push(node2?.left);
      queue2.push(node2?.right);
    }
  
    return queue1.length === queue2.length;
}

console.log(isSameTree(root, root));

import { root } from ".";
import { TreeNode } from ".";

function isSymmetric(root: TreeNode | null): boolean {
    const queue:TreeNode[] = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length > 0) {
      const left = queue.shift();
      const right = queue.shift();
  
      if (left === null && right === null) continue;
      if (left === null || right! == null) return false;
      if (left.val !== right.val) return false;
      queue.push(left.left);
      queue.push(right.right);
      queue.push(left.right);
      queue.push(right.left);
    }
  
    return true;
  }
  
  console.log(isSymmetric(root));
  
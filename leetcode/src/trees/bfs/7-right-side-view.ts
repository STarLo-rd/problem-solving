import { root } from ".";
import { TreeNode } from ".";

function rightSideView(root: TreeNode | null): number[] {
    if (root === null) {
      return [];
    }
  
    const result: any = [];
    const queue = [root];
    while (queue.length > 0) {
      let levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        let currentNode = queue.shift();
        if (currentNode) {
          if (currentNode.left) queue.push(currentNode.left);
          if (currentNode.right) queue.push(currentNode.right);
          if (i === levelSize - 1) result.push(currentNode.val);
        }
      }
    }
  
    return result;
  }
  console.log(rightSideView(root));
  
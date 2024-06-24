import { root } from ".";
import { TreeNode } from ".";

function averageOfLevel(root: TreeNode | null): number[] {
    if (!root) return [];
  
    const queue: TreeNode[] = [root];
    const result: number[] = [];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      let sum = 0;
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
        if (currentNode) {
          sum += currentNode.val;
          if (currentNode.left) queue.push(currentNode.left);
          if (currentNode.right) queue.push(currentNode.right);
        }
      }
      result.push(sum / levelSize);
    }
    return result;
  }
  
  console.log(averageOfLevel(root));
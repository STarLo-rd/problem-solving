import { root } from ".";
import { TreeNode } from ".";

function levelOrderBottom(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    if (!root) return result;
  
    const queue: TreeNode[] = [root];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel: number[] = [];
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift()!;
        currentLevel.push(currentNode.val);
  
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
  
      result.unshift(currentLevel);
    }
  
    return result;
  }

console.log(levelOrderBottom(root));

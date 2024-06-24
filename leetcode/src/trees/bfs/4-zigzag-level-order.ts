import { root } from ".";
import { TreeNode } from ".";

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
      return [];
    }
    const result: number[][] = [];
  
    let reverse = false;
  
    const queue: [TreeNode] = [root];
    while (queue.length > 0) {
      let levelSize = queue.length;
      const currentValue: any = [];
      for (let i = 0; i < levelSize; i++) {
        if (reverse) {
          const currentNode = queue.pop();
          if (currentNode) {
            currentValue.push(currentNode.val);
            if (currentNode.right) queue.unshift(currentNode.right);
            if (currentNode.left) queue.unshift(currentNode.left);
          }
        } else {
          const currentNode = queue.shift();
          if (currentNode) {
            currentValue.push(currentNode.val);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
          }
        }
      }
      reverse = !reverse;
      result.push(currentValue);
    }
    return result;
  }
console.log(zigzagLevelOrder(root))

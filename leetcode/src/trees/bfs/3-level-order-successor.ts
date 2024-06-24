import { root } from ".";
import { TreeNode } from ".";

function levelOrderSuccessor(root: TreeNode | null, target: number) {
    if (!root) return -1;
    const queue: TreeNode[] = [root];
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode) {
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        if (currentNode.val === target) break;
      }
    }
    return queue.shift();
  }
  
  console.log(levelOrderSuccessor(root, 3));
  
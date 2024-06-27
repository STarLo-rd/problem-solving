import { root } from ".";
import { TreeNode } from "../Tree";


function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null;
  
    const queue: (TreeNode | null)[] = [root];
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
  
      if (currentNode) {
        // Swap the left and right children
        const temp: TreeNode | null = currentNode.left;
        currentNode.left = currentNode.right;
        currentNode.right = temp;
  
        // Add the children to the queue for processing
        if (currentNode.left !== null) {
          queue.unshift(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.unshift(currentNode.right);
        }
      }
    }
  
    return root;
  }
console.log(invertTree(root));

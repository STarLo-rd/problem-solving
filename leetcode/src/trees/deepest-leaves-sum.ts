import { TreeNode } from "./Tree";

// function maxDepth(root) {
//   if (root == null) return 0;

//   const leftHeight = maxDepth(root.left);
//   const rightHeight = maxDepth(root.right);
//   return Math.max(leftHeight, rightHeight) + 1;
// }
function deepestLeavesSum(root: TreeNode | null): number {
    if (root === null) return 0;

    const queue = [root];
    let result = 0;
  
    while (queue.length > 0) {
      const currentLevel = queue.length;
      let sum = 0;
  
      for (let i = 0; i < currentLevel; i++) {
        const node = queue.shift();
        if (node) {
         sum+=node.val;
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
        }
      }
        result = sum;
      
    }
  
    return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(7);
root.right.right = new TreeNode(6);
root.right.right.right = new TreeNode(8);

console.log(deepestLeavesSum(root));

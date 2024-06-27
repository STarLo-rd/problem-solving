import { TreeNode } from ".";

function bstToGst(root: TreeNode | null): TreeNode | null {
  let sum = 0;

  const traverse = (node) => {
    if (node) {
      traverse(node.right); // Traverse the right subtree
      sum += node.val; // Update the sum
      node.val = sum; // Update the current node's value
      traverse(node.left); // Traverse the left subtree
    }
  };

  traverse(root);
  return root;
}

const root = new TreeNode(4);
root.left = new TreeNode(1);
root.right = new TreeNode(6);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(2);
root.left.right.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(7);
root.right.right.right = new TreeNode(8);

console.log(bstToGst(root));

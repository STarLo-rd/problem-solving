import { root, TreeNode } from ".";

function maxDepth(root: TreeNode | null): number {
  if (root == null) return 0;

  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

console.log(maxDepth(root));

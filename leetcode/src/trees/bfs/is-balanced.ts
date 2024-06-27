import { root, TreeNode } from ".";


function height(node:TreeNode | null): number{
    if(node === null) return 0;
    return Math.max(height(node?.left), height(node?.right)) + 1;
}
function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true;
  const balanced = Math.abs(height(root.left) - height(root.right)) <= 1;
  return balanced && isBalanced(root.left) && isBalanced(root.right)
}

console.log(isBalanced(root));

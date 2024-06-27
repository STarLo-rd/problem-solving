import { root } from ".";
import { TreeNode } from "../Tree";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;
  return root;
}
console.log(invertTree(root));

import { root } from "./dfs";
import { TreeNode } from "./Tree";

function flatten(root: TreeNode | null): void {
  if (root == null) return;

  let current: TreeNode = root;
  while (current != null) {
    if (current.left !== null) {
      let temp: TreeNode = current.left;
      while (temp.right != null) temp = temp.right;
      temp.right = current.right;
      current.right = current.left;
      current.left = null;
    }
    current = current.right;
  }
}

console.log(flatten(root));

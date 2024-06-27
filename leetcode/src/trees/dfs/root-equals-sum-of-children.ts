import { TreeNode } from "../Tree";

function checkTree(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  if((root === null ) || root.right === null && root.left === null) return true;

  return root.val === root.left?.val + root.right?.val && checkTree(root.left) && checkTree(root.right);
}

const root = new TreeNode(10);
root.left = new TreeNode(4);
root.right = new TreeNode(6);


console.log(checkTree(root));
// root.left.left = new TreeNode(0);
// root.left.right = new TreeNode(1);

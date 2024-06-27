import { TreeNode } from ".";

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  let depth = Infinity;
  function height(node, dep) {
    if (node === null) return dep;
    let leftDepth = height(node.left, dep + 1);
    let rightDepth = height(node.right, dep + 1);
    let de = Math.max(leftDepth, rightDepth);
    depth = Math.min(de, depth);
    return de;
  }

  height(root, 0);

  return depth;
}
const root = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(5);
root.right.right.right.right = new TreeNode(6);

console.log(minDepth(root));

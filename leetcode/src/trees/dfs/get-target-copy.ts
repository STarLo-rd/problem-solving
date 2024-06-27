import { root, TreeNode } from ".";

function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  if (cloned === null) return null;

  if (original === null || cloned === null || target === null) {
    return null;
  }

  if (original === target) {
    return cloned;
  }

  // Search in the left subtree
  const leftResult = getTargetCopy(original.left, cloned.left, target);
  if (leftResult !== null) {
    return leftResult;
  }

  // Search in the right subtree
  return getTargetCopy(original.right, cloned.right, target);
}

console.log(getTargetCopy(root, root, new TreeNode(7)));

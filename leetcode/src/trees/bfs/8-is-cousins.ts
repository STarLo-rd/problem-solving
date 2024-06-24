import { root } from ".";
import { TreeNode } from ".";

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    function findNode(node: TreeNode | null, x: number): TreeNode | null {
      if (node == null) {
        return null;
      }
      if (node.val === x) {
        return node;
      }
      const leftSearch = findNode(node.left, x);
      if (leftSearch !== null) return leftSearch;
      return findNode(node.right, x); // This was missing return
    }
  
    function isSibling(node: TreeNode | null, x: number, y: number): boolean {
      if (node == null) return false;
      return (
        (node.left !== null &&
          node.right !== null &&
          ((node.left.val === x && node.right.val === y) ||
            (node.left.val === y && node.right.val === x))) ||
        isSibling(node.left, x, y) ||
        isSibling(node.right, x, y)
      );
    }
  
    function level(node: TreeNode | null, x: number, lvl: number): number {
      if (node == null) return 0;
      if (node.val === x) return lvl;
  
      const leftLevel = level(node.left, x, lvl + 1);
      if (leftLevel != 0) return leftLevel;
      return level(node.right, x, lvl + 1);
    }
  
    if (root === null) {
      return false;
    }
  
    const xx = findNode(root, x);
    const yy = findNode(root, y);
  
    if (xx === null || yy === null) {
      return false;
    }
  
    return level(root, x, 0) === level(root, y, 0) && !isSibling(root, x, y);
  }
  
  console.log(isCousins(root, 4, 5));
import { TreeNode } from "../Tree";


function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null;

    // Helper function to build BST from a subarray
    function buildBST(start: number, end: number): TreeNode | null {
      if (start > end) return null;
  
      const middle = Math.floor((start + end) / 2);
      console.log(middle)
      const node = new TreeNode(nums[middle]);
  
      node.left = buildBST(start, middle - 1);
      node.right = buildBST(middle + 1, end);
  
      return node;
    }
  
    return buildBST(0, nums.length - 1);
}

console.log(sortedArrayToBST([1, 2, 3]));

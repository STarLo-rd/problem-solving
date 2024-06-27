import { TreeNode } from ".";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if(nums.length === 0) return null;

    const maxVal = Math.max(...nums)
    const maxIndex = nums.indexOf(maxVal);
    const leftArr = nums.slice(0, maxIndex);
    const rightArr = nums.slice(maxIndex+1, nums.length);
    const node = new TreeNode(maxVal);
    node.left = constructMaximumBinaryTree(leftArr);
    node.right = constructMaximumBinaryTree(rightArr)
    return node;    
};

console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))
import { root } from "./dfs";
import { TreeNode } from "./Tree";

function isValidBST(root: TreeNode | null): boolean {
    function helper(node, low, high){
        if(node === null) return true;

        if(low !== null && node.val <= low) return false;
        if(high !== null && node.val >= high) return false;

        const leftTree = helper(node.left, low, node.val);
        const rightTree= helper(node.right, node.val, high);
        return leftTree && rightTree;
    }
    
    return helper(root,null,null)
    
};

console.log(isValidBST(root))
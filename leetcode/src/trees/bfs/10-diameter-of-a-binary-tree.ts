import { root } from ".";
import { TreeNode } from "../Tree";

function diameterOfBinaryTree(root: TreeNode | null): number {

    let diameter = 0;

    function height(root){
        if(root === null) return 0;
        let left = height(root.left)
        let right = height(root.right);
        let dia = left + right + 1;
        diameter = Math.max(dia,diameter);
        return Math.max(left, right)+1;
    }
    height(root);

    return diameter - 1;
    
};


console.log(diameterOfBinaryTree(root));
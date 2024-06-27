import { TreeNode } from ".";

function evaluateTree(root: TreeNode | null): boolean {
    if(root === null) return true;
    if(root.val== 2) return evaluateTree(root.left) || evaluateTree(root.right)
    if(root.val == 3) return evaluateTree(root.left) && evaluateTree(root.right);
    return root.val?true:false;
};

const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(1);


console.log(evaluateTree(root))
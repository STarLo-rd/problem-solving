import {root, TreeNode} from "."

function inOrder(node, arr){
    if(node === null) return arr;
    inOrder(node.left,arr)
    arr.push(node.val);
    inOrder(node.right, arr)
    return arr;
}
function inorderTraversal(root: TreeNode | null): number[] {
    
    return inOrder(root, [])

    
};

console.log(inorderTraversal(root))

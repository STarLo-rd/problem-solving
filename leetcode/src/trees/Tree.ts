class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    insertIntoBST(root: TreeNode | null, val: number): TreeNode {
        if (root === null) {
            return new TreeNode(val);
        }
    
        if (val < root.val) {
            root.left = this.insertIntoBST(root.left, val);
        } else {
            root.right = this.insertIntoBST(root.right, val);
        }
    
        return root;
    }

     buildBST(values: (number | null)[]): TreeNode | null {
        let root: TreeNode | null = null;
        for (const val of values) {
            if (val !== null) {
                root = this.insertIntoBST(root, val);
            }
        }
        return root;
    }
}
export {TreeNode}
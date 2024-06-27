import { root, TreeNode } from ".";

function dfs(node: TreeNode | null, path: string, res: string[]): void {
    if (!node) return;

    path += node.val;

    if (!node.left && !node.right) {
        res.push(path);
        return;
    }

    if (node.left) dfs(node.left, path + "->", res);
    if (node.right) dfs(node.right, path + "->", res);
}

function binaryTreePaths(root: TreeNode | null): string[] {
    if (!root) return [];
    let res: string[] = [];
    dfs(root, "", res);
    return res;
};
console.log(binaryTreePaths(root))
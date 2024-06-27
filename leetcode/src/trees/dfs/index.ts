import { _Node, TreeNode } from "../Tree";

const tree = new TreeNode();
const values = [3, 9, 20, null, null, 15, 7];
const root = tree.buildBST(values);

const Tree = new _Node();
const root2 = Tree.createTree([1, 2, 3, 4, 5, 6, 7]);
export { root, root2, TreeNode, _Node };

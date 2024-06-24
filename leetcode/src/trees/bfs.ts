import { _Node, TreeNode } from "./Tree";

const tree = new TreeNode();
const values = [3, 9, 20, null, null, 15, 7];
const root = tree.buildBST(values);

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;

  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()!;
      currentLevel.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    result.push(currentLevel);
  }

  return result;
}

// console.log(levelOrder(root));

function averageOfLevel(root: TreeNode | null): number[] {
  if (!root) return [];

  const queue: TreeNode[] = [root];
  const result: number[] = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let sum = 0;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (currentNode) {
        sum += currentNode.val;
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }
    result.push(sum / levelSize);
  }
  return result;
}

// console.log(averageOfLevel(root));

function levelOrderSuccessor(root: TreeNode | null, target: number) {
  if (!root) return -1;
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode) {
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      if (currentNode.val === target) break;
    }
  }
  return queue.shift();
}

// console.log(levelOrderSuccessor(root, 3));

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const result: number[][] = [];

  let reverse = false;

  const queue: [TreeNode] = [root];
  while (queue.length > 0) {
    let levelSize = queue.length;
    const currentValue: any = [];
    for (let i = 0; i < levelSize; i++) {
      if (reverse) {
        const currentNode = queue.pop();
        if (currentNode) {
          currentValue.push(currentNode.val);
          if (currentNode.right) queue.unshift(currentNode.right);
          if (currentNode.left) queue.unshift(currentNode.left);
        }
      } else {
        const currentNode = queue.shift();
        if (currentNode) {
          currentValue.push(currentNode.val);
          if (currentNode.left) queue.push(currentNode.left);
          if (currentNode.right) queue.push(currentNode.right);
        }
      }
    }
    reverse = !reverse;
    result.push(currentValue);
  }
  return result;
}

// console.log(zigzagLevelOrder(root))

function levelOrderBottom(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;

  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()!;
      currentLevel.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    result.unshift(currentLevel);
  }

  return result;
}

// console.log(levelOrderBottom(root));

const Tree = new _Node();
const root2 = Tree.createTree([1, 2, 3, 4, 5, 6, 7]);

function connect(root: _Node | null): _Node | null {
  if (root == null) {
    return null;
  }

  let leftMost = root;

  while (leftMost.left !== null) {
    let currentNode = leftMost;
    while (currentNode != null) {
      currentNode.left.next = currentNode.right;
      if (currentNode.next != null) {
        currentNode.right.next = currentNode.next.left;
      }

      currentNode = currentNode.next;
    }
    leftMost = leftMost.left;
  }

  return root;
}

// console.log(connect(root2));

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  const result: any = [];
  const queue = [root];
  while (queue.length > 0) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      if (currentNode) {
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        if (i === levelSize - 1) result.push(currentNode.val);
      }
    }
  }

  return result;
}
// console.log(rightSideView(root));

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

// console.log(isCousins(root, 4, 5));
function isSymmetric(root: TreeNode | null): boolean {
  const queue = [];
  queue.push(root.left);
  queue.push(root.right);
  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();

    if (left === null && right === null) continue;
    if (left === null || right! == null) return false;
    if (left.val !== right.val) return false;
    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }

  return true;
}

console.log(isSymmetric(root));

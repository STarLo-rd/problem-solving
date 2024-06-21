import { TreeNode } from "./Tree";

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
      if(reverse){
        const currentNode = queue.pop();
        if(currentNode){
          currentValue.push(currentNode.val);
          if (currentNode.right) queue.unshift(currentNode.right);
          if (currentNode.left) queue.unshift(currentNode.left);
        }
      }else{
        const currentNode = queue.shift();
        if(currentNode){
          currentValue.push(currentNode.val);
          if (currentNode.left) queue.push(currentNode.left);
          if (currentNode.right) queue.push(currentNode.right);
        }
      }
    }
    reverse = !reverse
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


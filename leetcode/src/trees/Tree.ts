class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
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
export { TreeNode };

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class _Node {
  val: number;
  left: _Node | null;
  right: _Node | null;
  next: _Node | null;
  root: _Node | null;

  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }

  // Function to insert nodes in level order
  insertLevelOrder(arr: number[], root: _Node | null, i: number): _Node | null {
    if (i < arr.length) {
      let temp = new _Node(arr[i]);
      root = temp;

      // insert left child
      root.left = this.insertLevelOrder(arr, root.left, 2 * i + 1);

      // insert right child
      root.right = this.insertLevelOrder(arr, root.right, 2 * i + 2);
    }
    return root;
  }

  // Function to create the tree and print the structure
  createTree(arr) {
    let root = this.insertLevelOrder(arr, null, 0);
    return root;
  }

  // Function to print the tree in level order
  printLevelOrder(root: _Node | null) {
    if (root === null) return;

    let queue: (_Node | null)[] = [];
    queue.push(root);

    while (queue.length > 0) {
      let nodeCount = queue.length;

      while (nodeCount > 0) {
        let node = queue.shift();
        if (node) {
          console.log(node.val + " ");

          if (node.left !== null) queue.push(node.left);
          if (node.right !== null) queue.push(node.right);
        }

        nodeCount--;
      }
      console.log("\n");
    }
  }
}

export { _Node };

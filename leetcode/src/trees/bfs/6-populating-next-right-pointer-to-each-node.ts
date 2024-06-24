import { root2 } from ".";
import { _Node } from ".";

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

console.log(connect(root2));

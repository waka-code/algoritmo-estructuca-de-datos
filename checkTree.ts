/*
You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

Input: root = [10,4,6]
Output: true
Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
10 is equal to 4 + 6, so we return true.

Input: root = [5,3,1]
Output: false
Explanation: The values of the root, its left child, and its right child are 5, 3, and 1, respectively.
5 is not equal to 3 + 1, so we return false.
*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function checkTree(root: TreeNode | null): boolean {
  if (!root || (!root.left && !root.right)) {
    return true; 
  }
  
  let sumChildren = 0;
  if (root.left) {
    sumChildren += root.left.val;
  }
  if (root.right) {
    sumChildren += root.right.val;
  }
  
  if (root.val === sumChildren ) {
    return true;
  } else {
    return false;
  }
}
const root = new TreeNode(4);
root.left = new TreeNode(1); 
root.right = new TreeNode(3);

console.log(checkTree(root));

/*
Pase el ejercicio en leetCode con eso

function checkTree(root: TreeNode | null): boolean {
  let sumRoot = root.left.val + root.right.val;
  if (root.val === sumRoot) return true;
  else return false;
}*/



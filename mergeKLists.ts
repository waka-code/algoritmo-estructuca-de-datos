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
function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }
    const result:number[] = [];
    result.push(root.val);
    result.push(...preorderTraversal(root.left));
    result.push(...preorderTraversal(root.right));
    return result;
};

const root = new TreeNode(4);
root.left = new TreeNode(1); 
root.right = new TreeNode(3);

console.log(preorderTraversal(root));
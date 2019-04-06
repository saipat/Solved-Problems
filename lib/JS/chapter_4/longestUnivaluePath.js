// Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

// Note: The length of path between two nodes is represented by the number of edges between them.

// Example 1:

// Input:

//               5
//              / \
//             4   5
//            / \   \
//           1   1   5
// Output:

// 2
// Example 2:

// Input:

//               1
//              / \
//             4   5
//            / \   \
//           4   4   5
// Output:

// 2
// Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.


function longestUnivaluePath(root){
    let max = 0;

    let dfs = function(root){
        if(!root) return 0;

        let left = dfs(root.left);
        let right = dfs(root.right);

        if(root.left) {
            left = (root.value === root.left.value ? left + 1 : 0);
        }
        if(root.right) {
            right = (root.value === root.right.value ? right + 1 : 0);
        }

        max = Math.max(max, (left + right));

        return Math.max(left, right);
    }

    dfs(root);
    return max;
}

// test
function TreeNode(value) {
    this.value = value;
    this.left = this.right = null;
}

let bt = new TreeNode(1);
bt.right = new TreeNode(5);
bt.right.right = new TreeNode(5);
bt.left = new TreeNode(4);
bt.left.left = new TreeNode(4);
bt.left.right = new TreeNode(4);

console.log(bt);

console.log(longestUnivaluePath(bt));


bt = new TreeNode(5);
bt.right = new TreeNode(5);
bt.right.right = new TreeNode(5);
bt.left = new TreeNode(4);
bt.left.left = new TreeNode(1);
bt.left.right = new TreeNode(1);

console.log(longestUnivaluePath(bt));
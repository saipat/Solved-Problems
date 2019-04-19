// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

//     Note: A leaf is a node with no children.

//         Example:

// Given binary tree[3, 9, 20, null, null, 15, 7],

//      3
//     / \
//    9  20
//      /  \
//     15   7
// return its depth = 3.


function maximumDepth(root){
    if(!root) return 0;

    return Math.max(maximumDepth(root.left), maximumDepth(root.right)) + 1;
}


// test
const BST = require('./bstImplementation');
const bst = new BST();
bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(0);
bst.insert(3);
bst.insert(6);
bst.insert(7);
bst.insert(5);

console.log(maximumDepth(bst.root));

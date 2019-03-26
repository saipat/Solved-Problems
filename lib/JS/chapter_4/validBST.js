// Given a binary tree, determine if it is a valid binary search tree(BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// IOCE
// I=> binary tree
// O => boolean
// C => bst
// E => root null

// Time => O(n) and space => O(logn)
function isValid(root){
    if(!root) return null;

    return minMaxHelper(root, null, null);
}

function minMaxHelper(root, min, max){
    if(!root) return true;

    if((min != null && root.value <= min) && (max != null && root.value >= max)){
        return false;
    }

    return minMaxHelper(root.left, min, root.value) && minMaxHelper(root.right, root.value, max)
}

// test
const BST = require('./bstImplementation')
const bst = new BST();
bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(6);
bst.insert(7);
bst.insert(5);

console.log(isValid(bst.root));

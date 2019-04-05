// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree.The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.Otherwise, the NOT null node will be used as the node of new tree.
// Example 1:

// Input:
//   Tree 1                     Tree 2
  
//      1                         2
//     / \                       / \                            
//    3   2                     1   3
//   /                           \   \
//  5                             4   7

// Output:
// Merged tree:
//      3
//     / \
//    4   5
//   / \   \
//  5   4   7


// Use Dfs recursive approach.

class BinaryTree{
    constructor(value){
        this.value= value;
        this.right = null;
        this.left = null;
    }
}

function merge2Bts(t1, t2){
    if(!t1 && !t2){
        return null
    }

    if(!t1 || !t2){
        return t1 || t2;
    }

    const node = new BinaryTree(t1.value + t2.value);

    node.left = merge2Bts(t1.left, t2.left);
    node.right = merge2Bts(t1.right, t2.right);

    

    return node;
}

// test
const BST = require('./bstImplementation');
const bst = new BST();
bst.insert(1);
bst.insert(2);
bst.insert(4);
bst.insert(5);
bst.insert(3);

const bst1 = new BST();
bst1.insert(1);
bst1.insert(2);
bst1.insert(4);


console.log(merge2Bts(bst.root, bst1.root));

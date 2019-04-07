// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3
// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?


// use inorder traversal(which use dfs) to get the sorted array
// keep count of the elements and is that matches the k, then return that element.


function kthSmallestElement(root, k){
    if(!root) return null;

    let count = 0;

    let inOrder = function(root){
        if(!root){
            return 0;
        }

        const left = inOrder(root.left);
        count ++; 
        
        if(count === k) return root.value;

        const right = inOrder(root.right);

        return left || right;
    }

    return inOrder(root);
}

// test
const BST = require('./bstImplementation');
const bst = new BST();
bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(6);
bst.insert(7);
bst.insert(5);

console.log(kthSmallestElement(bst.root, 1));

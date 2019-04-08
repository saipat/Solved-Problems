// First Common Ancestor: Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.

// I =>  tree, node1, node2.
// O =>  common ancestor.
// C => not necessarily a bst.
// E => empty tree or just one node.

// Check if the tree is empty or has only one node and that matched out input. If yes return root.
// otherwise do recursion using dfs to find the common ancestor.
// if there is a left and right, return its root.
// or return left or right;

// O(n)
function firstCommonAncestor(root, node1, node2){
    if (!root || node1 === root || node2 === root){
        return root;
    }

    let left = firstCommonAncestor(root.left, node1, node2);
    let right = firstCommonAncestor(root.right, node1, node2);

    if (!left) return right  // node1 and node2 are in the right subtree
    if (!right) return left  // node1 and node2 are in the left subtree
    return root             // node1 is in one side and node2 is in the other
}


// test

const BST = require('./bstImplementation');
const bst = new BST();
// bst.insert(4);
// bst.insert(2);
// bst.insert(1);
// bst.insert(3);
// bst.insert(6);
// bst.insert(7);
// bst.insert(5);

bst.insert(4);
bst.insert(5);
bst.insert(6);
bst.insert(2);
bst.insert(7);
bst.insert(3);
bst.insert(1);
bst.insert(0);
bst.insert(8);

// console.log(bst.root);

// console.log(bst.root.left.left);


// console.log(firstCommonAncestor(bst.root, bst.root.left, bst.root.right));
console.log(firstCommonAncestor(bst.root, bst.root.left.left, bst.root.left.right));
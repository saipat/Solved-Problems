// Invert a binary tree.

//     Example:

// Input:

//       4
//     /   \
//    2     7
//   / \   / \
//  1   3 6   9
// Output:

//       4
//     /   \
//    7     2
//   / \   / \
//  9   6 3   1


//Time=> O(n)=> n is the no:ofnodes, Spcae depends on h(depht of the tree) but since h belongs to O(n), spcae is O(n)

function invertBt(root){
    if(!root) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertBt(root.left);
    invertBt(root.right);

    return root;
}

// test
const BST = require('./bstImplementation');
const bst = new BST();
bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(7);
bst.insert(6);
bst.insert(9);

console.log(invertBt(bst.root))
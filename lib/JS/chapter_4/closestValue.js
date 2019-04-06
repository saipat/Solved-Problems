// Closest Binary Search Tree Value
// Given a non - empty binary search tree and a target value, find the value in the BST that is closest to the target.
//     Note:
// Given target value is a floating point.
// You are guaranteed to have only one unique value in the BST that is closest to the target.

//     Example:
// Input: root = [4, 2, 5, 1, 3], target = 3.714286

//      4
//     / \
//    2   5
//   / \
//  1   3

// Output: 4

// C => Given target value is a floating point. & You are guaranteed to have only one unique value in the BST that is closest to the target.

// E => empty tree, what are u going to return when there is no match for the target.


// Time => O(n)
function closestValue(root, target){
    if(!root) return null;
    target =  parseInt(target.toFixed(0));

    if(root.value === target) return root.value;

    if(target < root.value){
        root = closestValue(root.left, target);
    }else {
        root = closestValue(root.right, target);
    }
    
    return root;
    
}



// test
const BST = require('./bstImplementation');
const bst = new BST();
bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(3);
console.log(`closestValue(bst.root, 4.6) => ${closestValue(bst.root, 4.6)}`);
console.log(`closestValue(bst.root, 3.714286) => ${closestValue(bst.root, 3.714286)}`);
console.log(`closestValue(bst.root, 3.14286) => ${closestValue(bst.root, 3.14286)}`);
console.log(`closestValue(bst.root, 5.67) => ${closestValue(bst.root, 5.07)}`);

// Given a binary tree and a sum, determine if the tree has a root - to - leaf path such that adding up all the values along the path equals the given sum.

// check if there is a root
// if not return false;
// if root.left and root.right is null(that is we have reached the leaf) and sum === root.val then return true
// else do recursion on the left side and right side but minus the sum with the root's value.

// Time => O(n), no:of:nodes and Space => O(logn), worstcase => spcae O(n) skewed tree.
function pathSum1(root, sum){
    if(!root) return false;

    if(!root.left && !root.right && sum === root.value){
        return true;
    }

    // console.log(root.left, sum - root);
    let left = pathSum1(root.left, sum - root.value);
    
    let right = pathSum1(root.right, sum - root.value);

    // console.log(left, right)
    return left || right;
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

console.log(pathSum1(bst.root, 7))
console.log(pathSum1(bst.root, 10))
console.log(pathSum1(bst.root, 9))
console.log(pathSum1(bst.root, 5))
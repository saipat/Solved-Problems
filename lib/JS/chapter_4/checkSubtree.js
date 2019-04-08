// Check Subtree: Tl and T2 are two very large binary trees, with Tl much bigger than T2. Create an algorithm to determine if T2 is a subtree of Tl. A tree T2 is a subtree of Tl if there exists a node n in Tl such that the subtree of n is identical to T2. That is, if you cut off the tree at node n, the two trees would be identical.


// I => t1 and t2, t1 < t2
// O => boolean


// Use a dfs approach.
// start from the root node; if there is no root, return false;
// else if the root valuw of t1 and t2 are equal and perform a function to make sure all the child values are also qual by doing a separate dfs.
// if both the conditions are true, return true.
// else do a dfs on right and left.


// Time => O(N+M)
// Spcae => O(N) where N is the depth of the larger tree.
const isSubTree = function(t1, t2){
    const dfs = function(root){
        if(!root) {
            return false;
        }else if(root.value === t2.value && isSubRecur(root, t2)){
            return true;
        }else {
            return dfs(root.left) || dfs(root.right);
        }
    }

    const isSubRecur = function (root, t2) {
        if (!root && !t2) {
            return true;
        } else if (!root || !t2) {
            return false;
        } else if (root.value === t2.value) {
            return isSubRecur(root.left, t2.left) && isSubRecur(root.right, t2.right);
        }else {
            return false;
        }
    }

    return dfs(t1);
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

const t2 = new BST();
t2.insert(2);
t2.insert(1);
t2.insert(3);

console.log(isSubTree(bst.root, t2.root));

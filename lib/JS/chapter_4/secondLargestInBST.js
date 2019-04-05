// Write a function to find the 2nd largest element in a binary search tree.

// check if there is a root or the root has right & left. if not return error.
// while we have a root, do the below steps.
// if there is left and no right, find the largest in the left.(write a helper hunction to fins the largest of the left )
// if the current is the parent of the largest and the largest has no children , the our 2nd largest is the parent.

function secondLargest(root){
    if (!root || (!root.left && !root.right) ){
        throw new Error('We have to have alteast 2 nodes to find the largest');
    }

    let current = root;

    while(current){
        if(current.left && !current.right){
            return findLargest(current.left);
        }

        if(current.right && !current.right.left && !current.right.right){
            return current.value;
        }

        current = current.right;
    }
}

function findLargest(root){
    let current = root;

    while(current){
        if (!current.right) return current.value;
        current = current.right;
    }
    
}

// test
const BST = require('./bstImplementation');
let bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(1);
bst.insert(8);
bst.insert(7);
bst.insert(12);

console.log(secondLargest(bst.root));


bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(1);
bst.insert(8);
bst.insert(7);
bst.insert(12);
bst.insert(9);
bst.insert(10);
bst.insert(11);

console.log(secondLargest(bst.root));
// Given a sorted (increasing order) array with uniq elements, write an algorithms to create a binary search tree with minimal height.

// IOCE
// I => sorted array with uniq elements[1,2,3,4,5,6,7,8]
// O => a bst with minimal height
// C => left < root < right
// E => ?

// First find the midpoint in the array.
// create a node with that element. so we need to write a node class.
// find the left subtree elements using recursion
// find the right subtree elements using recursion
// return the node.

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// O(n logn)
function minHeightBST(array, start, end){
    if(start > end) return null;

    let mid = Math.floor((start+end)/2);
    let node = new Node(array[mid]);

    node.left = minHeightBST(array, start, mid-1);
    node.right = minHeightBST(array, mid+1, end);

    return node;
}





// test
const array = [1,2,3,4,5,6,7,8];
console.log(minHeightBST(array, 0, array.length-1));
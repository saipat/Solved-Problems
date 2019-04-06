// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

function convertArraytoBST(array){
    if (!array.length) return null;
		let mid = Math.floor(array.length / 2);

    let root = new TreeNode(array[mid]);
    
    // console.log(root);
    

		root.left = convertArraytoBST(array.slice(0, mid));
		root.right = convertArraytoBST(array.slice(mid + 1));

		return root;
}


// test
console.log(convertArraytoBST([-10, -3, 0, 5, 9]));

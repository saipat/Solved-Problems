// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

//     Note: A leaf is a node with no children.

//         Example:

// Given binary tree[3, 9, 20, null, null, 15, 7],

//      3
//     / \
//    9  20
//      /  \
//     15   7
// return its depth = 2.

function minimumDeph(root){
    let depth  = 1;

    if(!root.left && !root.right) return depth;

    let queue = [{node: root, height: depth}];

    while(queue.length){
        let current = queue.shift();
        if(!current.node.right && !current.node.left) return current.height;

        if(current.node.left){
            queue.push({node: current.node.left, height: current.height+1});
        }
        if(current.node.right){
            queue.push({ node: current.node.right, height: current.height + 1 });
        }

    }

}


// test
const BST = require('./bstImplementation');
const bst = new BST();
bst.insert(4);
bst.insert(2);
// bst.insert(1);
// bst.insert(0);
// bst.insert(3);
bst.insert(6);
bst.insert(7);
bst.insert(5);

console.log(minimumDeph(bst.root));
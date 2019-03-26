// Implement a function to check if a binary tree is balanced. The height of the 2 subtrees of any node never differ by more thatn one.

class BinaryTreeNode{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }

    insertLeft(value){
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value){
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

// check for root node. if there is no root node, return null;
// we short circuit as soon as we find more than 2;
// keep nodes as a pair of node and its depth;
// while there is a node in the nodes array, iterate th it.
// pop of the last node and gets its node and depth.
// In case there is a leaf, find the indexof the depth in the depth array.
// if it is < 0, push the depth into depths.
// if the depths length > 2 or diff btw the first 2 depths is > 1, return false.
// If there is no leaf and if there is left or right, go one level deeper.
// return true after the while loop.

// O(n) space and time;
function isBAlanced(root){
    if (!root) return null;

    const depths = [];
    const nodes = [];
    nodes.push([root, 0]);

    while(nodes.length){
        const nodepair = nodes.pop();
        const node = nodepair[0];
        const depth = nodepair[1];

        if(!node.right && !node.left){
            if(depths.indexOf(depth) < 0){
                depths.push(depth);

                if(depths.length > 2 || (depths.length ===2 && Math.abs(depth[0]-depth[1]) > 1)){
                    return false;
                }
            }
        }else{
            if(node.left){
                nodes.push([node.left, depth + 1]);
            }
            if(node.right){
                nodes.push([node.right, depth + 1]);
            }
        }
    }
    return true;
}

// test

const BST = require('./bstImplementation');
const bst = new BST();
bst.insert(25);
bst.insert(23);
bst.insert(24);
bst.insert(5);
bst.insert(3);
bst.insert(1);
bst.insert(11);
bst.insert(30);
bst.insert(29);
bst.insert(60);
bst.insert(17);
bst.insert(0);
bst.insert(2);
console.log(bst);

console.log(isBAlanced(bst.root));



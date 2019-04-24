// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Example: 

// You may serialize the following tree:

//     1
//    / \
//   2   3
//      / \
//     4   5

// as "[1,2,3,null,null,4,5]"
// Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

class Node{
    constructor(value){
        this.value = value;
        this.right = this.left = null;
    }
}

function serialize(root){
    let string = '';

    function build(node){
        if(!node){
            string += '# '
        } else{
            string += node.value + ' ';
            build(node.left);
            build(node.right);
        }
    }

    build(root);

    return string;
}

function deserialize(string){
    let nodes = string.split(' ');

    function buildTree() {
        let val = nodes.shift();

        if(val === '#'){
            return null;
        }else{
            let node = new Node(val);
            node.left = buildTree();
            node.right = buildTree();
            return node;
        }
    }

    return buildTree()
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


console.log(serialize(bst.root));

console.log(deserialize('4 2 1 # # 3 # # 6 5 # # 7 # # '));

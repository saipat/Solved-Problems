// []Given a tree like below.Return an integer value representation of the tree, then return the string expression of the tree, then turn the string expression back into a tree

// IOCE
// I
//      +
//    /  \
//   4    *
//       /  \
//      2    3
// O => 10
// E => if the internal node is a leaf with number, return the number

// DFS Time => O(n)
function evaluateTree(root){
    if(!root)  return 0;

    if(!root.left && !root.right) {
        return root.value;
    }else{
        if(root.value === '+'){
           return  evaluateTree(root.left) + evaluateTree(root.right);
        }
        if(root.value === '-'){
           return  evaluateTree(root.left) - evaluateTree(root.right);
        }
        if(root.value === '*'){
           return  evaluateTree(root.left) * evaluateTree(root.right);
        }
        if(root.value === '/'){
           return  evaluateTree(root.left) / evaluateTree(root.right);
        }
    }

}



// test
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const rootNode = new Node('+');
rootNode.left = new Node(4);
rootNode.right = new Node('*');
rootNode.right.left = new Node(2);
rootNode.right.right = new Node(3);

console.log(rootNode);

console.log(evaluateTree(rootNode));





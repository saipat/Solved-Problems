// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

// The successor of a node p is the node with the smallest key greater than p.val.

function successorBST(root, p){
    const nodeToFind = p;
    let successor = null;

    // if the right subtree is not null, traverse th' the right subtree and find the min val in the right subtree
    if(nodeToFind.right){
        return minRight(nodeToFind.right);
    }

    // if there is no node.right, start with the root and travese down.
    // if the node value is < root, then make root the successor and traverse left.
    // if the node value is > root, then traverse right.
    // if equal, break;

    while(root){
        if(nodeToFind.value < root.value){
            successor = root;
            root = root.left;
        }else if (nodeToFind.value > root.value){
            root = root.right;
        }else{
            break;
        }

    }
    return successor;
}   

function minRight(successor){
    while(successor.next){
        successor = successor.next;
    }

    return successor;
}
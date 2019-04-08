// Given a binary tree, design an algorithm which creates a linkedlist of all the nodes at each depth(eg: if you have a tree with depth d, you will have d linked lints)

// IOCE
// I => A binary tree
// O => LinkedList
// E => tree with only one node

const List = require('../chapter_2/linkedList');

function listOfDepths(root, arrayOfLists, level){
    if (!root) return;

    if (arrayOfLists.length < 0) {
        arrayOfLists.push(new List());
    }

    arrayOfLists[level - 1].append = root;
    listOfDepths(root.left, arrayOfLists, level+1)
    listOfDepths(root.right, arrayOfLists, level+1)

    return arrayOfLists;
}

function treeDepths(root){
    return listOfDepths(root, [], 0)
}

treeDepths();
// Given a binary tree and a sum, find all root - to - leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.


function pathSum2(root, sum){
    return helper(root, sum, [], []);
}

function helper(root, sum, solution, result){
    if(!root) return result; //Sanity check

    // add current node's value to the solution
    solution.push(root.value);

    if(!root.left && !root.right && sum === root.value){
        result.push(solution.slice()); //Found a soln
    }

    helper(root.left, sum - root.value, solution, result) //try left
    helper(root.right, sum - root.value, solution, result) //try right

    solution.pop(); //Backtracking

    return result;
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

console.log(pathSum2(bst.root, 9));

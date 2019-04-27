// Given an array of numbers, verify whether it is the correct preorder traversal sequence of a binary search tree.

// You may assume each number in the sequence is unique.

// Consider the following binary search tree: 

//      5
//     / \
//    2   6
//   / \
//  1   3
// Example 1:

// Input: [5,2,6,1,3]
// Output: false
// Example 2:

// Input: [5,2,1,3,6]
// Output: true
// Follow up:
// Could you do it using only constant space complexity?


function verifyPreOrderSeq(array){
    let stack = [];
    let root = Number.MIN_SAFE_INTEGER;

    for(num of array){

        if(num < root) return false;

        let n = stack.length;

        while(n > 0 && stack[n-1] < num){
            root = stack.pop();
            n = stack.length;
        }

        stack.push(num);
    }

    return true;
}




// test
console.log(verifyPreOrderSeq([5, 2, 6, 1, 3]));
console.log(verifyPreOrderSeq([5, 2, 1, 3, 6]));

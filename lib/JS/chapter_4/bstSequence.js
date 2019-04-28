// BST Sequences: A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.


// EXAMPLE
// Input: a tree with root 2 and nodes 3, 1
// Output: {2, 1, 3}, {2, 3, 1}
// E =>  tree with one node or no node


function bstSqeuence(root){
    let array = bst.preorder(root).split('');
    
    
    function findPermute(array) {
        let result = [];

        const permute = (array, m = []) => {
            
            if (array.length === 0) {
                result.push(m);
            } else {
                for (let i = 0; i < array.length; i++) {
                    let current = array.slice();
                    let next = current.splice(i, 1);
                    permute(current, m.concat(next));
                }
            }

            return result;
        }

        return permute(array);
    }

    array = array.map(Number);
    
    let permutations = findPermute(array);
  
    return permutations.filter(el => el[0] === array[0]);
    
}


// test
const BST = require('./bstImplementation');
const bst = new BST();
bst.insert(2);
bst.insert(1);
bst.insert(3);

// console.log(bst.root);


console.log(bstSqeuence(bst.root));

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Note:

// You must do this in -place without making a copy of the array.
// Minimize the total number of operations.


// Use 2 pointer.
// instead of moving the 0's right, move the numbers to the right;

// Time => O(n) and space => O(1)
function moveZeros(arr){
    let pos = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] != 0){
            arr[pos++] = arr[i];
        }
    }
    
    for(i=pos; i <arr.length; i++){
        arr[i] = 0;
    }

    return arr;
}

// test
let array = [0, 1, 0, 3, 12];
console.log(moveZeros(array));

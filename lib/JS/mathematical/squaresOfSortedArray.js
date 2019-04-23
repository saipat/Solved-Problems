// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.

// Approach - 2 pointers
// Time => O(n) and space => O(n)
function squares(array){
    let i=0, j = array.length-1, r = array.length-1;
    const result = new Array(array.lenght);

    while(i <= j){
        if(array[i] * array[i] > array[j] * array[j]){
            result[r] = array[i] * array[i];
            i ++;
        }else{
            result[r] = array[j] * array[j];
            j --;
        }

        r--;
    }

    return result;
}


// test
console.log(squares([-4, -1, 0, 3, 10]));
console.log(squares([-7, -3, 2, 3, 11]));

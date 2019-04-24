// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// Example: 

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.
// Follow up:
// If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 


function minimumSizeSubarray(nums, S){
    let min = Number.POSITIVE_INFINITY;

    let sum = 0, i= -1, left = 0;

    while(++i < nums.length) {
        sum += nums[i];

        while(sum >= S){
            min = Math.min(min, i + 1 - left);
            sum -= nums[left ++];
        }
    }

    return min === Number.POSITIVE_INFINITY ? 0 : min;
}



// test
console.log(minimumSizeSubarray([2, 3, 1, 2, 4, 3], 7));

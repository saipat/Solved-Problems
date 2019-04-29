// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

// Example:

// Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
// Output: [3,3,5,5,6,7] 
// Explanation: 

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Note: 
// You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

// Follow up:
// Could you solve it in linear time?


function slidingWindowMaximum (nums, k){
    let maxes = [], q = [];

    for(let last=0, first=1-k; last <nums.length; last++, first++){

        while(q.length && nums[last] > q[q.length -1]){
            q.pop();
        }

        q.push(nums[last]);

        if( first < 0) continue;

        maxes.push(q[0]);

        if(nums[first] === q[0])    q.shift();
    }

    return maxes;
}
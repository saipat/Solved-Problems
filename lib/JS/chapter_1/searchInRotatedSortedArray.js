// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Approach: binary search
// TIme => O(logn) Space =>O(1)
function search(nums, target){
    if(!nums) return -1;

    let left = 0, right = nums.length-1;

    while(left <= right){
        const mid =  Math.floor((right + left) / 2);

        if(nums[mid] === target) return mid;

        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target < nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(nums[mid] < target && target <= nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }

    return -1;
}


// test
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([4, 5, 6, 7, 0, 1, 2], 4));

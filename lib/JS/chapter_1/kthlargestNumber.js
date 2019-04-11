// Find the kth largest element in an unsorted array.Note that it is the kth largest element in the sorted order, not the kth distinct element.

//     Example 1:

// Input: [3, 2, 1, 5, 6, 4] and k = 2
// Output: 5
// Example 2:

// Input: [3, 2, 3, 1, 2, 4, 5, 5, 6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.

var findKthLargest = function (nums, k) {
    // k is always valid 
    if (!nums || nums.length === 0) return -1;
    if (nums.length === 1) return nums[0];

    return quickSelectHelper(nums, 0, nums.length - 1, k);
};

var quickSelectHelper = (nums, lo, hi, k) => {
    // Lomuto's partition scheme.
    let pivot = Math.floor(Math.random() * (hi - lo + 1)) + lo;
    console.log(`pivot => ${pivot}`);
    
    [nums[pivot], nums[hi]] = [nums[hi], nums[pivot]];

    console.log(`nums => ${nums}`);
    
    let i = lo, j = hi - 1;
    while (i <= j) {
        if (nums[i] <= nums[hi]) {
            i++;
        } else {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j--;
        }
    }
    console.log(`i => ${i}`);
    
    [nums[hi], nums[i]] = [nums[i], nums[hi]];
    // i was the pivot value 
    pivot = i;
    if (pivot === nums.length - k) return nums[pivot];
    if (pivot < nums.length - k) return quickSelectHelper(nums, pivot + 1, hi, k);
    return quickSelectHelper(nums, lo, pivot - 1, k);
};


// test
// console.log(findKthLargest([3,2,1,5,6,4], 2));
// console.log(findKthLargest([3,2,1,5,6,4], 1));
console.log(findKthLargest([3,2,1,5,6,4], 4));

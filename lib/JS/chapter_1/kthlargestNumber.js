var findKthLargest = function (nums, k) {
    // k is always valid 
    if (!nums || nums.length === 0) return -1;
    if (nums.length === 1) return nums[0];

    return quickSelectHelper(nums, 0, nums.length - 1, k);
};

var quickSelectHelper = (nums, lo, hi, k) => {
    let pivot = Math.floor(Math.random() * (hi - lo + 1)) + lo;
    console.log(`pivot => ${pivot}`);
    
    [nums[pivot], nums[hi]] = [nums[hi], nums[pivot]];
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
console.log(findKthLargest([3,2,1,5,6,4], 2));

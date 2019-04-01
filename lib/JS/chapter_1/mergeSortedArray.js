// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

//     Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space(size that is greater or equal to m + n) to hold additional elements from nums2.

// IOCE
// Input:
// nums1 = [1, 2, 3, 0, 0, 0], m = 3
// nums2 = [2, 5, 6], n = 3

// Output: [1, 2, 2, 3, 5, 6]

// Time O(n+m) and Space O(1)
function mergeArrays(nums1, m, nums2, n){
    let j = m-1, i=n-1, k = m+n-1;

    while(j >=0){
        if(i >=0 && nums1[i] > nums2[j]){
            nums1[k] = nums1[i--];
        }else{
            nums1[k] = nums2[j--];
        }
        k--;
    }

    return nums1;
}



// test
console.log(mergeArrays([1, 2, 3, 0, 0, 0],3, [2, 5, 6],3));

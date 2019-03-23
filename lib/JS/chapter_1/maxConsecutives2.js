// Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.

// Example 1:
// Input: [1, 0, 1, 1, 0]
// Output: 4
// Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
// After flipping, the maximum number of consecutive 1s is 4.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10, 000
// Follow up:
// What if the input numbers come in one by one as an infinite stream ? In other words, you can't store all numbers coming from the stream as it's too large to hold in memory.Could you solve it efficiently ?

function countConsecutiveOnes(array) {
    if (array.length === 0) return 0;
    // O(n)
    if (array.length === 1) return 1;
    if (array.length === 2 && array[0] === 0 && array [1]===0) return 1;
    if (!array.includes(0)) return array.length;

    let slow = 0, fast = 1, count = 1, max = 1, flip = 0;

    // O(n-1)
    while (fast < array.length) {
        if (array[slow] === array[fast] && array[slow] === 1) {
            fast += 1;
            count += 1;
            max = count > max ? count : max;
        } else {
            if(flip === 0){
                count += 1;
                max = max +1;
                array[fast] = array[slow];
                flip = 1;
            }
            slow = fast;
            fast += 1;
        }
    }

    return max;

}


// test
console.log(`countConsecutiveOnes([1,0,1,1,0]) => ${countConsecutiveOnes([1, 0, 1, 1, 0])}`);
console.log(`countConsecutiveOnes([1,1,0]) => ${countConsecutiveOnes([1, 1, 0])}`);
console.log(`countConsecutiveOnes([1,1,0,1,1]) => ${countConsecutiveOnes([1, 1, 0,1,1])}`);
console.log(`countConsecutiveOnes([1,1,1,1,0]) => ${countConsecutiveOnes([1,1,1,1,0])}`);
console.log(`countConsecutiveOnes([1,1,1,1,1]) => ${countConsecutiveOnes([1,1,1,1,1])}`);
console.log(`countConsecutiveOnes([0]) => ${countConsecutiveOnes([0])}`);
console.log(`countConsecutiveOnes([0,0]) => ${countConsecutiveOnes([0,0])}`);
console.log(`countConsecutiveOnes([0,0,0,0,1]) => ${countConsecutiveOnes([0,0,0,0,1])}`);
console.log(`countConsecutiveOnes([0,1]) => ${countConsecutiveOnes([0,1])}`);
// Max Consecutive Ones
// Go to Discuss
// Given a binary array, find the maximum number of consecutive 1s in this array.

//     Example 1:
// Input: [1, 1, 0, 1, 1, 1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
// The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10, 000

//IOCE
// I = [1,1,0,1,1,1]
// O => 3
// C => array contains 0 and 1
// E => empty array, no 1 in the array.

// return 0 if the input array is empty
// return 0 if the ip array does not have any 1's
// lets have a var count.
// lets use 2 pointers approach.
// lets iterate th' the array, set the first pointer to i and second pointer to i+1
// check if the element at i is eq to element at i+1.
// if yes, increment count. eles set count to 0 and increment just the second pointer by 1
// move the first pointer to i+1 and secont pointer to i+1+1
// repeat the preocess.
// return the count

// Time => O(n), Space => O(1)
function countConsecutiveOnes(array){
    if (array.length === 0) return 0;
    // O(n)
    if (!array.includes(1)) return 0;
    if (array.length === 1 && array[0] === 1) return 1;

    let slow = 0, fast = 1, count = 1, max = 1;

    // O(n-1)
    while(fast < array.length){
        if(array[slow] === array[fast] && array[slow] === 1){
            fast += 1;
            count += 1; 
            max = count > max ? count : max;
        }else {
            slow = fast;
            fast += 1;
            count = 1;
        }
    }

    return max;
    
}


// test
console.log(`countConsecutiveOnes([1,1,0,1,1,1]) => ${countConsecutiveOnes([1, 1, 0, 1, 1, 1]) }`);
console.log(`countConsecutiveOnes([1,1,1,1,1]) => ${countConsecutiveOnes([1, 1, 1, 1, 1]) }`);
console.log(`countConsecutiveOnes([1,0,1,1,0,1]) => ${countConsecutiveOnes([1, 0, 1, 1, 0, 1])}`);
console.log(`countConsecutiveOnes([1,0,1,1,0]) => ${countConsecutiveOnes([1, 0, 1, 1, 0])}`);
console.log(`countConsecutiveOnes([1]) => ${countConsecutiveOnes([1])}`);
console.log(`countConsecutiveOnes([1, 0]) => ${countConsecutiveOnes([1, 0])}`);
console.log(`countConsecutiveOnes([1, 1]) => ${countConsecutiveOnes([1, 1])}`);
console.log(`countConsecutiveOnes([1, 0,1]) => ${countConsecutiveOnes([1,0, 1])}`);
console.log(`countConsecutiveOnes([0,0,0,0]) => ${countConsecutiveOnes([0,0,0,0]) }`);
console.log(`countConsecutiveOnes([]) => ${countConsecutiveOnes([]) }`);
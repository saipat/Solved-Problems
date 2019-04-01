// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

//     Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1(0 0 0 1)
// 4(0 1 0 0)
// ↑   ↑

// Time O(n)
function hammingDistance(x, y){
    let count = 0;

    while (x > 0 || y > 0){
        let rx = x % 2;
        let ry = y % 2;

        if(rx != ry){
            count ++;
        }

        x = Math.floor(x/2);
        y = Math.floor(y/2);
    }

    return count;
}



// test
console.log(`hammingDistance(1,4) => ${hammingDistance(1, 4)}`);

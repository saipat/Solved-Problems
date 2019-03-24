// We define  to be a sequence of distinct sequential integers from  to; in other words, .We want to know the maximum bitwise AND value of any two integers, a and b (where a < b), in sequence S  that is also less than a given integer, k.

// Complete the function in the editor so that given  and, it returns the maximum 
// a & b < k.

// IOCE
// I => 5 2
//      8 5
//      2 2
// O => 1 4 0
// C => a < b and a&b < k
// E => a > b


// initialize max = 0 and define sum;
// iterate th' the set and make sure the j < i and start the iteration from 1.
// find the AND for i & j and store it in the sum
// if the sum is < k, find the max
// if max is < sum, then max is sum or else max is max
//  return the max

function getMaxLessThanK(S , k){
    let max = 0, sum;

    for(let i= 1; i<=S; i++){
        for(let j = 1; j<i; j++){
            sum = i & j;

            if (sum < k){
                max = sum > max ? sum : max;
            }
        }
    }

    return max;
}


// test
console.log(`getMaxLessThanK(5, 2) => ${getMaxLessThanK(5, 2)}`);
console.log(`getMaxLessThanK(8, 5) => ${getMaxLessThanK(8, 5)}`);
console.log(`getMaxLessThanK(2, 2) => ${getMaxLessThanK(2, 2)}`);
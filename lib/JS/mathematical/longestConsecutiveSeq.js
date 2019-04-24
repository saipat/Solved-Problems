// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// Your algorithm should run in O(n) complexity.

// Example:

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


function maxLengthSeq(array){
    let record = {};
    let maxLength = 0;

    for(let n of array){
        record[n] = true;
    }

    for(let key in record){
        if(record[key-1]) continue;

        let length = 1;
        
        let curKey = +key + 1;

        while(record[curKey]){
            length ++;
            curKey ++;
        }

        maxLength = length > maxLength ? length : maxLength;
    }

    return maxLength;
}



// test
console.log(maxLengthSeq([100, 4, 200, 1, 3, 2]));

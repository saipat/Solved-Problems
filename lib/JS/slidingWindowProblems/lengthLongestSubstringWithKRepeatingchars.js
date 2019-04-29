// Find the length of the longest substring T of a given string(consists of lowercase letters only) such that every character in T appears no less than k times.

//     Example 1:

// Input:
// s = "aaabb", k = 3

// Output:
// 3

// The longest substring is "aaa", as 'a' is repeated 3 times.
//     Example 2:

// Input:
// s = "ababbc", k = 2

// Output:
// 5

// // The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

// Divide and conquer approach.
var longestSubstring = function (s, k) {
    let map = new Map();
    map.clear();
    for (item of s) {
        if (map.has(item))
            map.set(item, map.get(item) + 1);
        else
            map.set(item, 1);
    }
    
    for ([item, val] of map) {
        
        if (val < k) {
            let arr = s.split(item);
            let res = 0;
            // console.log(ar);
            
            for (word of arr) {
                res = Math.max(res, longestSubstring(word, k))
            }
            return res;
        }
    }
    return s.length;
};



// test
console.log(longestSubstring('ababbc', 2));

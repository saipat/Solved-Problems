// Longest Substring with At Most K Distinct Characters
// Given a string, find the length of the longest substring T that contains at most k distinct characters.

// Example 1:

// Input: s = "eceba", k = 2
// Output: 3
// Explanation: T is "ece" which its length is 3.
// Example 2:

// Input: s = "aa", k = 1
// Output: 2
// Explanation: T is "aa" which its length is 2.

// Brute force

function longestSubstring(string, k){
    let longestLength = 0;

    for(let i=0; i< string.length; i++){
        for(let j=0; j<string.length; j++){
            let substring = string.slice(i, j);

            numberDistinct = (new Set(substring)).size;

            if (numberDistinct > k) continue;

            if (substring.length > longestLength) {
                longestLength = substring.length;
            }
        }
    }

    return longestLength;
}


// test
console.log(longestSubstring('eceba', 2));
console.log(longestSubstring('aa', 1));

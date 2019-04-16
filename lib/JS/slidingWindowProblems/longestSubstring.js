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

// function longestSubstring(string, k){
//     let longestLength = 0;

//     for(let i=0; i< string.length; i++){
//         for(let j=0; j<string.length; j++){
//             let substring = string.slice(i, j);

//             numberDistinct = (new Set(substring)).size;

//             if (numberDistinct > k) continue;

//             if (substring.length > longestLength) {
//                 longestLength = substring.length;
//             }
//         }
//     }

//     return longestLength;
// }

// Sliding Window Approach
// Time O(n)
function longestSubstring(str, k){
    let windowStart = 0;
    let windowLength = 1;

    let longestLength = 0;

    while(true){
        let windowStop = windowStart + windowLength;

        // ensure that we don't run over the bounds;
        if(windowStop > str.length) break;

        // slice the string.
        let substring = str.slice(windowStart, windowStop);

        // find the no:of:distinct chars
        let distintChars = (new Set(substring)).size;

        //  If we have too many distinct characters in the sliced substring, we enter this branch which simply slides the window over to the right by one.Important note: we don't shrink or reset its size -- we keep it the same size as the window we're looking for.
        if(distintChars > k){
            windowStart += 1;
        }else{
            // Update longest_substring_length.Note: we can do this * without *testing whether it's longer than the previously set longest_substring_length because we know our window is wider than any previously seen window.
            longestLength = windowLength;
            // Increase window length for future iterations
            windowLength += 1;
        }
    }

    return longestLength;
}

// test
console.log(longestSubstring('eceba', 2));
console.log(longestSubstring('aa', 1));

// Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.

// If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.

// Example 1:

// Input: 
// S = "abcdebdde", T = "bde"
// Output: "bcde"
// Explanation: 
// "bcde" is the answer because it occurs before "bdde" which has the same length.
// "deb" is not a smaller window because the elements of T in the window must occur in order.
 

// Note:

// All the strings in the input will only contain lowercase letters.
// The length of S will be in the range [1, 20000].
// The length of T will be in the range [1, 100].

function longestSubsquence(S, T){
    let sIndex = 0, tIndex = 0;
    const sLen = S.length, tLen = T.length;

    let result = '';
    let subLen = Number.MAX_VALUE;

    // iterate th' all the chars of S
    while(sIndex < sLen){

        // if the current ch od S matches with the current ch of T
        if(S[sIndex] === T[tIndex]){
            tIndex ++;

            // if(all the ch in T is matched)
            if(tIndex === tLen){
                let end = sIndex + 1 //Index after the matched char.
                tIndex --;


                while(tIndex >= 0){
                    if(S[sIndex] === T[tIndex]){
                        tIndex--;
                    }

                    sIndex--;
                }

                sIndex ++;
                tIndex ++;

                if(end - sIndex < subLen){
                    subLen = end - sIndex;
                    result = S.substring(sIndex, end);
                    
                }
            }
        }

        sIndex ++;
        
    }

    return subLen === Number.MAX_VALUE ? '' : result;
}


// test
console.log(longestSubsquence('abcdebdde', 'bde'));

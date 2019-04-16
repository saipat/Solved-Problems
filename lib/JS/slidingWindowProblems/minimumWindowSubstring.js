// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

//     Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.


function minWindow(s, t) {
    let charCount = t.length
    let begin = 0
    let end = 0

    let minStartIndex = 0
    let minLength = Number.MAX_VALUE

    // create a map of each char in t to its number of occurrences
    const charToCount = t.split('').reduce((map, val) => ({
        ...map,
        [val]: ++map[val] || 1
    }), {})

    while (end < s.length) {
        const currChar = s[end]

        // the current char in s is in t so we decrement the count
        // we check for > 0 because a char in s may exceed the number of times it actually appears in t
        if (charToCount[currChar] > 0) {
            charCount--
        }

        // decrease the count for the char and advance the end pointer
        charToCount[currChar]--
        end++

        // when count reaches zero, all chars in t have been matched
        while (charCount === 0) {
            // update the minimum window's start position and length
            if ((end - begin) < minLength) {
                minLength = end - begin
                minStartIndex = begin
            }

            // since we will advance the begin pointer and lose
            // a char, the char count needs to be incremented
            charToCount[s[begin]]++

            // if the char at the begin pointer existed in t
            // the window has lost a char in t
            if (charToCount[s[begin]] > 0) {
                charCount++
            }

            // minimize the window by advancing the start pointer
            begin++
        }
    }

    return minLength === Number.MAX_VALUE ? '' : s.substr(minStartIndex, minLength)
};


// test
console.log(minWindow('ADOBECODEBANC', 'ABC'));

// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

//     Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.


// We first create map wherein the keys are each character in t and the value is the number of occurences of that char in t.
// We maintain two pointers, one representing the begin and and end of our window.Both are initialized to zero.
// We also keep track of the count of unmatched characters in our window.

// We begin by advancing the end pointer.
// If the current character in s at the end index exists in our map, we decrement the count of our unmatched characters.Next we decrement the count for that character in our map and advance our end pointer.

// When the unmatched character count reaches zero, we know that all characters in t have been matched.If the window is shorter than our current minimum window, we update it.Next we try to shorten our window by advancing the begin pointer.When we lose a character in t by advancing the begin pointer, we terminate as we can no longer decrease the size of the window.

// The above repeats until the end pointer reaches the end of s.If the minimum length of the window has not changed since initialization, we know that no window exists and return an empty string, otherwise we return the minimum window.


function minWindow(s, t) {
    let charCount = t.length
    let begin = 0
    let end = 0

    let minStartIndex = 0
    let minLength = Number.MAX_VALUE

    // create a map of each char in t to its number of occurrences
    // { A: 1, B: 1, C: 1 }
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

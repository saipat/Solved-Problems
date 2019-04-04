// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

//     Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

var isPalindrome = function (s) {
    if (!s) return true;
    s = s.trim().toLowerCase().replace(/[^a-z]/g, "");

    var start = 0;
    var end = s.length - 1;
    while (start < end) {
        if (s[start] == s[end]) {
            start++;
            end--;
        }
        else return false;
    }

    return true;
};


// test
console.log(isPalindrome('A man, a6 plan, a canal: Panama'));
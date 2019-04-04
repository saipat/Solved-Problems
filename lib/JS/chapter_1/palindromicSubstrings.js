// Given a string, your task is to count how many palindromic substrings in this string.
// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

//     Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".


//     Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


//     Note:
// The input string length won't exceed 1000.

function palindromicSubstring(str){
    let count = str.length;

    for(let i=0; i<str.length; i++){
        count += countPalindrome(str, i, i+1) + countPalindrome(str, i, i+2);
    }

    return count;
}

function countPalindrome(str, i, j){
    let count = 0;

    while(i >=0 && j < str.length && str[i] === str[j]){
        count ++;
        i--;
        j++;
    }

    return count;
}


// test
// console.log(palindromicSubstring('abc'));
// console.log(palindromicSubstring('aaa'));
console.log(palindromicSubstring('ababa'));

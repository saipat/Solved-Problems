// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Note:

// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like . or *.
// Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input:
// s = "aa"
// p = "a*"
// Output: true
// Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input:
// s = "ab"
// p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
// Example 4:

// Input:
// s = "aab"
// p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
// Example 5:

// Input:
// s = "mississippi"
// p = "mis*is*p*."
// Output: false

function matching(s, p){
    if(s.length === 0 && p.length === 0){
        return true;
    }

    if(s.length!=0 && p.lenght ===0){
        return false;
    }

    if(s.length === 0 && p.length != 0){
        if(p[1] === '*'){
            return matching(s, p.slice(2))
        }else{
            return false;
        }
    }

    if(p[1] === '*'){
        if(s[0] === p[0] || p[0] === '.'){
            return matching(s.slice(1), p) || matching(s, p.slice(2));
        }else{
            return matching(s, p.slice(2));
        }
    }else{
        if(s[0] === p[0] || p[0] === '.'){
            return matching(s.slice(1), p.slice(1));
        }else{
            return false;
        }
    }
}


// test
let s = "ab"
let p = ".*"
console.log(matching(s,p));

s = "aa"
p = "a*"
console.log(matching(s,p));

s = 'aab';
p = 'c*a*b';
console.log(matching(s,p));

s = "mississippi"
p = "mis*is*p*."
console.log(matching(s,p));

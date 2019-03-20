// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

//     Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

// IOCE 
// C =>  Open brackets should be closed in the right order by the same type of brackets
// E => Empty string is valid too.


// so the datastructure that I think will be good is stack and hash map.
// create a hash map for the brackets
// Add the brackets into a stack as we iterate th' the chars of the string.
// if the ith char matches any of the keys in the hash, then push it to the stack.
// pop it off of the stack and compare the bracket at that index with the hash map.
// if not equal, return false immediately.
// else true.


// O(n) => time, space => O(n)
function isValidParanthesis(str){
    if (str.length === 0) return true;
    if (str.length % 2 != 0) return false; //assuming there is no space in between

    let stack = [];
    let hash = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    for(let i=0; i<str.length; i++){
        if (str[i] === '(' || str[i] === '{' || str[i] === '['){
            stack.push(str[i]);
        }else if(hash[stack.pop()] != str[i]){
            return false;
        }
    }

    return true;
}



// test
console.log(`isValidParanthesis('()[]{}') => ${isValidParanthesis('()[]{}')}`);
console.log(`isValidParanthesis('([)]') => ${isValidParanthesis('([)]')}`);
console.log(`isValidParanthesis('([]') => ${isValidParanthesis('([)]')}`);
console.log(`isValidParanthesis('') => ${isValidParanthesis('')}`);
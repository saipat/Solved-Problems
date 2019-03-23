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


// check for the string length. if it is 0 then return true.
// use stack to store the brackets.
// store the opening brackets and the closing brackets into 2 arrays.
// iterate th' the str and get the first char;
// find the index of that char in the closing brackets array 
// if the index of that char in the closing brackets array , and find the opening bracket matching that index.
    // if the stack length is 0 or and last element in the stack is not equal to the opening matching bracket, then return false
// if not the index of that char in the closing brackets array, then push it into the stack
// finally if the stack's length is 0, then return true.


// O(n) => time, space => O(n)
function isValidParanthesis(code){

    const openersToClosers = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    const openers = new Set(['(', '[', '{']);
    const closers = new Set([')', ']', '}']);

    const openersStack = [];

    for (let i = 0; i < code.length; i++) {
        const char = code.charAt(i);

        if (openers.has(char)) {
            openersStack.push(char);
        } else if (closers.has(char)) {
            if (!openersStack.length) {
                return false;
            }
            const lastUnclosedOpener = openersStack.pop();

            // If this closer doesn't correspond to the most recently
            // seen unclosed opener, short-circuit, returning false
            if (openersToClosers[lastUnclosedOpener] !== char) {
                return false;
            }
        }
    }
    return openersStack.length === 0;

}



// // test
console.log(`isValidParanthesis('()[]{}') => ${isValidParanthesis('()[]{}')}`);
console.log(`isValidParanthesis('([)]') => ${isValidParanthesis('([)]')}`);
console.log(`isValidParanthesis('([]') => ${isValidParanthesis('([)]')}`);
console.log(`isValidParanthesis('((') => ${isValidParanthesis('((')}`);
console.log(`isValidParanthesis('()') => ${isValidParanthesis('()')}`);
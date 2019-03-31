// Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it.If no such solution, return -1.

// For example, with A = "abcd" and B = "cdabcdab".

//     Return 3, because by repeating A three times(“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times("abcdabcd").

//         Note:
// The length of A and B will be between 1 and 10000.

// IOCE
// I => A = "abcd" and B = "cdabcdab".
// O => 3
// C => 
// E => str1 or str2 empty, return -1


// if both the strings are empty return -1;
// divide the B by A with their lenth and round by /math.ceil.
// store that as a count.
// then repeat A by count and assign it to var str
// if str includes B then return the count
// else add A to str and check if this includes B.
// it yes, return count + 1 else return -1.

// Time => O(mn) Space => O(n)
function repeatedStringMatch(a, b){
    if (a.length ===0  && b.length === 0) return -1;

    const count = Math.ceil(b.length/a.length);
    const str = a.repeat(count);
    return str.includes(b) ? count :  (str+a).includes(b)? count + 1 : -1;
}



// test
console.log(`repeatedStringMatch('abcd', 'cdabcdab') => ${repeatedStringMatch('abcd', 'cdabcdab')}`);
console.log(`repeatedStringMatch('123', 'cdabcdab') => ${repeatedStringMatch('123', 'cdabcdab')}`);
console.log(`repeatedStringMatch('a', 'a') => ${repeatedStringMatch('a', 'a')}`);
console.log(`repeatedStringMatch('ab', 'bab') => ${repeatedStringMatch('ab', 'bab')}`);
console.log(`repeatedStringMatch('', '') => ${repeatedStringMatch('', '')}`);

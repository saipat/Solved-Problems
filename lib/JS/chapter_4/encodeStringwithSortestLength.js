// Given a non-empty string, encode the string such that its encoded length is the shortest.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.

// Note:

// k will be a positive integer and encoded string will not be empty or have extra space.
// You may assume that the input string contains only lowercase English letters. The string's length is at most 160.
// If an encoding process does not make the string shorter, then do not encode it. If there are several solutions, return any of them is fine.
 

// Example 1:

// Input: "aaa"
// Output: "aaa"
// Explanation: There is no way to encode it such that it is shorter than the input string, so we do not encode it.
 

// Example 2:

// Input: "aaaaa"
// Output: "5[a]"
// Explanation: "5[a]" is shorter than "aaaaa" by 1 character.
 

// Example 3:

// Input: "aaaaaaaaaa"
// Output: "10[a]"
// Explanation: "a9[a]" or "9[a]a" are also valid solutions, both of them have the same length = 5, which is the same as "10[a]".
 

// Example 4:

// Input: "aabcaabcd"
// Output: "2[aabc]d"
// Explanation: "aabc" occurs twice, so one answer can be "2[aabc]d".
 

// Example 5:

// Input: "abbbabbbcabbbabbbc"
// Output: "2[2[abbb]c]"
// Explanation: "abbbabbbc" occurs twice, but "abbbabbbc" can also be encoded to "2[abbb]c", so one answer can be "2[2[abbb]c]".


// Dfs

const map = new Map();

function encode(s){
    if (s.length === 0) return '';
    if(s.length <= 4) return s;

    if(map.has(s)) return map.get(s);

    let temp = s;

    for(let i=Math.floor(s.length/2); i<s.length; i++){
        
        let pattern = s.substring(i);

        let times = countRepeat(s, pattern);

        if(times * pattern.length != s.length) continue;

        let candidate = parseInt(times) + '[' + encode(pattern) + ']';

        if (candidate.length < temp.length) {
			temp = candidate;
		}
    }

    for(let i=1; i<s.length; i++){
        
        let left = encode(s.substring(0, i));
        let right = encode(s.substring(i));

        let candidate = left + right;
        if (candidate.length < temp.length) {
			temp = candidate;
		}
    }

    map.set(s, temp);
    
    return temp;
}

function countRepeat(s, pattern){
    let count = 0;

    while (s.length >= pattern.length) {
            let sub = s.substring(s.length - pattern.length);
            if (sub === pattern) {
                count ++;
                s = s.substring(0, s.length - pattern.length);
            } else {
                return count
            }
    }

    return count;
}






// test
console.log(encode('aaa'));
console.log(encode('aaaaa'));
console.log(encode('aaaaaaaaaa'));
console.log(encode('abbbabbbcabbbabbbc'));
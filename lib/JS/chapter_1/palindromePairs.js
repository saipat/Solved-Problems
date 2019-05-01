// Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

// Example 1:

// Input: ["abcd","dcba","lls","s","sssll"]
// Output: [[0,1],[1,0],[3,2],[2,4]] 
// Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
// Example 2:

// Input: ["bat","tab","cat"]
// Output: [[0,1],[1,0]] 
// Explanation: The palindromes are ["battab","tabbat"]


// O(N * K ^ 2)
var palindromePairs = function(words) {
	const res = [],
        map = new Map(words.map((item, index) => [item, index]));
        
    if (!words || words < 2) return res;
    
	words.forEach((word, index) => {
		for (let i = 0; i <= word.length; i++) {
			let str1 = word.substring(0, i);
            let str2 = word.substring(i, word.length);
            
			if (isPal(str1)) {
				const revStr2 = str2.split('').reverse().join('');
                    
				if (map.has(revStr2) && map.get(revStr2) !== index) {
					res.push([map.get(revStr2), index]);
				}
			}
			if (str2.length > 0 && isPal(str2)) {
				const revStr1 = str1.split('').reverse().join('');
                    
				if (map.has(revStr1) && map.get(revStr1) !== index) {
					res.push([index, map.get(revStr1)]);
				}
			}
		}
	});

	return res;

	function isPal(str) {
		let left = 0,
			right = str.length - 1;
		while (left < right) {
			if (str.charAt(left++) !== str.charAt(right--)) return false;
		}
		return true;
	}
};


// test
console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']));
console.log(palindromePairs(['a', '']));
console.log(palindromePairs(['a', 'abc', 'aba', '']));
console.log(palindromePairs(['a', 'b', 'c', 'ab', 'ac', 'aa']));
console.log(palindromePairs(['bb', 'bababab', 'baab', 'abaabaa', 'aaba', '', 'bbaa', 'aba', 'baa', 'b']));

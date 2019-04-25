// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false


// function wordBreak(s, wordDict){
//         var t = [];

// 		for (var i = 0; i < s.length; i++) {
// 			for (var j = 0; j <= i; j++) {
//                 var word = s.slice(j, i + 1);
                
//                 console.log(i, j, word);
                

// 				if (wordDict.includes(word) && (j == 0 || t[j - 1] == true)) {
//                     t[i] = true;
//                     console.log(t);
                    
// 				}
// 			}
// 		}

// 		return t[s.length - 1] || false; 
// }

function wordBreak(S, wordDict){
    if(wordDict.length === 0) return false;
    if(wordDict.length === 1) return s === wordDict[0];

    let map = new Map();

    let queue = [''];

    while(queue.length){
        let val = queue.shift();

        for(let word of wordDict){
            let searchWord = `${val}${word}`;
            let startsWith = S.indexOf(searchWord) === 0;

            if(searchWord === S) {
                return true;
            }else if (!map.has(searchWord) && startsWith){
                map.set(searchWord, true);
                queue.push(searchWord);
            }
        }
    }
    
    return false;
}

// test
console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));

// Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

// Example 1:

// Input: ["abcd","dcba","lls","s","sssll"]
// Output: [[0,1],[1,0],[3,2],[2,4]] 
// Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
// Example 2:

// Input: ["bat","tab","cat"]
// Output: [[0,1],[1,0]] 
// Explanation: The palindromes are ["battab","tabbat"]

// O(n^3)
var palindromePairs = function(words) {
	let result = [];
    let checked = {};
    let indices = {}

	for (let i = 0; i < words.length; i++) {
		for (let j = 0; j < words.length; j++) {
            let combo = words[i] + words[j];
            
            if (!checked[combo] && i != j) {
                checked[combo] = true;
                indices[combo] = [i, j];
            } else if(i != j && ((words[i] === '' || words[j] === '' ))){
                combo = `${combo}0`;
				checked[combo] = true;
				indices[combo] = [i, j];
            }else if(checked[combo] && i!=j){
                let r = Math.floor(Math.random() * 10);
                combo = `${combo}${r}`;
				checked[combo] = true;
				indices[combo] = [i, j];
            }
        // console.log(combo, checked[combo]);
        }
    }

    // console.log(indices);
    // console.log(Object.keys(checked));
    

    let wordsToCheck = Object.keys(checked);

    for(let i=0; i<wordsToCheck.length; i++){
        let ch = wordsToCheck[i];
        if (isPalindrome(ch)){
            result.push(indices[ch]);
        }else if(!isNaN(ch[ch.length-1]) && isPalindrome(ch.slice(0, ch.length-1))){
            result.push(indices[ch]);
        }
    }

	return result;
};

function isPalindrome(word){
    for(let i=0; i<word.length; i++){
        if(word[i] != word[word.length-1-i]){
            return false;
        }
    }

    return true;
}


// test
console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']));
console.log(palindromePairs(['a', '']));
console.log(palindromePairs(['a', 'abc', 'aba', '']));
console.log(palindromePairs(['a', 'b', 'c', 'ab', 'ac', 'aa']));
console.log(palindromePairs(['bb', 'bababab', 'baab', 'abaabaa', 'aaba', '', 'bbaa', 'aba', 'baa', 'b']));

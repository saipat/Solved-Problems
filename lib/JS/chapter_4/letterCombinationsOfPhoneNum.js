// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.


// function letterCombinations(digits){
// 	const map = {
// 		2: ['a', 'b', 'c'],
// 		3: ['d', 'e', 'f'],
// 		4: ['g', 'h', 'i'],
// 		5: ['j', 'k', 'l'],
// 		6: ['m', 'n', 'o'],
// 		7: ['p', 'q', 'r', 's'],
// 		8: ['t', 'u', 'v'],
// 		9: ['w', 'x', 'y', 'z'],
// 	};

// 	let queue = digits.length === 0 ? [] : [''];

// 	for(let n=0; n<digits.length; n++){
// 		let letters = map[digits[n]];
// 		let queueLength = queue.length
		
// 		for(let i=0; i<queueLength; i++){
// 			let item = queue.shift();

// 				for (var l = 0; l < letters.length; l++) {
// 					queue.push(item + letters[l]);
// 				}
// 		}
// 	}

// 	return queue;
// }


// dfs and backtracking
function letterCombinations(digits, res = [], level=0, combo=[]){
	   if (!digits) return [];
		if (level === digits.length) {
			res.push(combo.join(''));
			return;
		}
		const map = {
			'2': 'abc',
			'3': 'def',
			'4': 'ghi',
			'5': 'jkl',
			'6': 'mno',
			'7': 'pqrs',
			'8': 'tuv',
			'9': 'wxyz',
		};
		for (const c of map[digits[level]]) {
			combo.push(c);
			letterCombinations(digits, res, level + 1, combo);
			combo.pop();
		}
		return res;
}

// test
console.log(letterCombinations('23'));

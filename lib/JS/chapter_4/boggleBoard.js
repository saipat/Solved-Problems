// Boggle Board(From Geeks For Geeks)
// Given a dictionary and an M x N board where every node has one character.Find all possible words that can be formed by a sequence of adjacent characters.Note that we can move to any of 8 adjacent characters, but a word should not have multiple instances of the same node.
//     Example:
// // Input:
// let dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
// let boggle = [['G', 'I', 'Z'],
//               ['U', 'E', 'K'],
//               ['Q', 'S', 'E']];
// findWords(boggle) // => The Following words of dictionary are present
//                   // => GEEKS
//                   // => QUIZ


function findWords(board, words) {
	const root = buildTrie(words);
	let res = [];

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			searchWord(root, i, j, board, res);
		}
	}

	return res;
}

function buildTrie(words) {
	let root = {};

	for (let word of words) {
		let node = root;

		word.split('').forEach(c => node = node[c] ? node[c] : node[c] = {});
		node.word = word;
	}

	return root;
}

function searchWord(node, i, j, board, res) {
	if (node.word) {
		res.push(node.word);
		node.word = null;
	}

	if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
	if (board[i][j] === '#' || !node[board[i][j]]) return;

	const c = board[i][j];

	board[i][j] = '#'; // mark visited

	searchWord(node[c], i + 1, j, board, res);
	searchWord(node[c], i - 1, j, board, res);
	searchWord(node[c], i, j + 1, board, res);
	searchWord(node[c], i, j - 1, board, res);

	board[i][j] = c; // reset
}

// test


board = [['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v']];
words = ['oath', 'pea', 'eat', 'rain'];

console.log(findWords(board, words));
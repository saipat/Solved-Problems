// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.


// split the word
// iterate th' the board and visit all the chars
// when visiting, check for bounds
// increment the path
// mark it as visited
// if we find the word, return true
// else move ip, down, right and left
// backtrack and return false


var wordSearch = function(board, word) {
	var wordLength = word.length, i, j;

	word = word.split('');

	var visited = function(row, col, board, path) {
		if (row < 0 || col < 0 || row >= board.length || col >= board[0].length ||   board[row][col] != word[path] || path > wordLength) {
            return false;
        }
			
		// Up to this point, we found the char we were looking for
		path++;
		board[row][col] = '0';

		//If we find the word
		if (path === wordLength) return true;
		
		if (visited(row - 1, col, board, path)) return true;
		if (visited(row, col + 1, board, path)) return true;
		if (visited(row + 1, col, board, path)) return true;
        if (visited(row, col - 1, board, path)) return true;
        
		// Backtrack
		board[row][col] = word[--path];
		return false;
	};

	for (i = 0; i < board.length; i++) {
		for (j = 0; j < board[i].length; j++) {
			if (visited(i, j, board, 0)) return true;
		}
	}

	return false;
};




// test
let board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
let word = 'ABCCED';
console.log(wordSearch(board, word));

word = 'SEE';
console.log(wordSearch(board, word));

word = 'ABCB';
console.log(wordSearch(board, word));
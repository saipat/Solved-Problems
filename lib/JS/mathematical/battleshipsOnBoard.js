
// Given an 2D board, count how many battleships are in it.The battleships are represented with 'X's, empty slots are represented with '.'s.You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically.In other words, they can only be made of the shape 1xN(1 row, N columns) or Nx1(N rows, 1 column), where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
//     Example:
// X..X
// ...X
// ...X
// In the above board there are 2 battleships.
// Invalid Example:
// ...X
// XXXX
// ...X
// This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
// Follow up:
// Could you do it in one - pass, using only O(1) extra memory and without modifying the value of the board ?

// 
// def count_battleships(board)
// count = 0

//     (0...board.length).each do | i |
//         (0...board[0].length).each do | j |
//             next if board[i][j] == '.';
// next if (i > 0 && board[i - 1][j] == 'X');
// next if (j > 0 && board[i][j - 1] == 'X');
// count += 1
// end
// end

// count
// end

function countBattleships(board){
    let count = 0;

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] === '.') continue;
            
            if(i > 0 && board[i-1][j] === 'X') continue;
            if(j > 0 && board[i][j-1] === 'X') continue;

            count ++;
        }
    }

    return count;
}


// test
let board = [['X','.','.','X'],
             ['.','.','.','X'],
             ['.','.','.','X']]
console.log(countBattleships(board));

board =  [['.','.','.','X'],
          ['X','X','X','X'],
          ['.','.','.','X']]
console.log(countBattleships(board));



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


var findWords = function (board, words) {
    var result = [];
    if (!words.length) {
        return result;
    }

    var current;
    var root = Object.create(null);
    for (var i = 0; i < words.length; i++) {
        current = root;
        for (var j = 0; j < words[i].length; j++) {
            if (!current[words[i][j]]) {
                current[words[i][j]] = Object.create(null);
            }
            current = current[words[i][j]];
        }

        current.word = words[i];
    }

    var heigth = board.length;
    var width = heigth ? board[0].length : 0;
    var nextIndex;

    var find = function (node, row, col) {
        if (node.word) {
            result.push(node.word);
            node.word = null;
        }

        var char = board[row][col];
        if (!node[char]) {
            return;
        }

        if (node[char].word) {
            result.push(node[char].word);
            node[char].word = null;
        }

        board[row][col] = "";
        if (row > 0 && board[row - 1][col]) {
            find(node[char], row - 1, col);
        }
        if (col > 0 && board[row][col - 1]) {
            find(node[char], row, col - 1);
        }
        if ((nextIndex = (row + 1)) < heigth && board[nextIndex][col]) {
            find(node[char], nextIndex, col);
        }
        if ((nextIndex = (col + 1)) < width && board[row][nextIndex]) {
            find(node[char], row, nextIndex);
        }

        board[row][col] = char;
    };

    for (var i = 0; i < heigth; i++) {
        for (var j = 0; j < width; j++) {
            find(root, i, j);
        }
    }

    return result;
};

// test
// board = [
//     ['o', 'a', 'a', 'n'],
//     ['e', 't', 'a', 'e'],
//     ['i', 'h', 'k', 'r'],
//     ['i', 'f', 'l', 'v']
// ]

let board = [      
        ['g', 'i', 'z'],
        ['u', 'e', 'k'],
     ['q', 's', 'e']
    ];
let  words = ["geeks", "for", "quix", 'go']

console.log(findWords(board, words));
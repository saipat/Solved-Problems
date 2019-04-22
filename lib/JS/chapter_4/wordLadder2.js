// Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

// Only one letter can be changed at a time
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:

// Return an empty list if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output:
// [
//   ["hit","hot","dot","dog","cog"],
//   ["hit","hot","lot","log","cog"]
// ]
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: []

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.


function wordLadder2(beginWord, endWord, wordList){
    let result = [], visited = {};
    let steps = Infinity;
    const queue = [[beginWord]];
    const dictionary = new Set(wordList);

    while(queue.length){
        let currentPath = queue.shift();
        let curWord = currentPath[currentPath.length - 1];

        if(currentPath.length >= steps) break;

        for(let i = 97; i<123; i++){
            for(let j=0; j<curWord.length; j++){
                let word = curWord.substring(0, j) + String.fromCharCode(i) + curWord.substring(j + 1);

                if(word !== curWord && dictionary.has(word)){
                    if(!visited[word]) {
                        queue.push([...currentPath, word]);
                    }

                    if(word === endWord){
                        if(currentPath.length < steps){
                            steps = currentPath.length + 1;
                        }

                        result.push([...currentPath, word]);
                    }
                }
            }

        }

        visited[curWord] = true;
    }

    return result;
}


// test
console.log(wordLadder2('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
console.log(wordLadder2('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));

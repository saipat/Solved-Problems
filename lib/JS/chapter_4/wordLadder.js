// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.


// Thought Process: (BFS w/ Optimization)
//    - Basically we start from "beginWord". Let's say 'Hit'. 
//    - We take all the characters in beginWord ['h', 'i', 't']
//    - compare it against all possibilities. ait, bit, cit.....then..hat, hbt..'hot' -> Yes it's in the list. Add it to queue.
//    - Keep digging until our queue is empty or we don't have any more words to process.
//    - Return 0 if we don't have any results or len if the endWord is found.


//
function wordLadder(beginword, endword, wordList){
    let length = 1, queue = [beginword];
    const seen = new Set(queue);
    const dictionary = new Set(wordList);

    while(queue.length){
        let nextWords = [];

        for(let word of queue){
            if(word === endword) return length;

            let arr = word.split('');

            for(let i=0; i<arr.length; i++){
                for(let j=0; j<26; j++){
                    arr[i] = String.fromCharCode(j+96);

                    const newWord = arr.join('');

                    if(!seen.has(newWord) && dictionary.has(newWord)){
                        seen.add(newWord);
                        nextWords.push(newWord);
                    }

                    arr[i] = word[i];
                }
            }
        }

        queue = nextWords;
        length ++;
    }

    return 0;
}



// test
console.log(wordLadder('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
console.log(wordLadder('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));


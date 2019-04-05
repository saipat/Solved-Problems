
// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

//     Example:
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

//     Input: word1 = “coding”, word2 = “practice”
// Output: 3
// Input: word1 = "makes", word2 = "coding"
// Output: 1
// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.


// IOCE
// I=>words = ["practice", "makes", "perfect", "coding", "makes"]
        // word1 = “coding”, word2 = “practice”
// O=>3

// consider edge cases;
// Assume my min = words.length;
// iterate th the words array
// if I find the word1, then store its index as say a;
// if I find the word1, then store its index as say b;
// then calculate the min by comparing the min and the diff of a & b;
// return the min;

// TIme => O(n) Space=O(1)
function shortestWordDistance(words, word1, word2){

    if(!words) return null;
    if(word1 === word2 || !word1 || !word2) return null;

    let min = words.length;
    let a = -1, b=-1;

    for(let i=0; i<words.length; i++){
        if(words[i] === word1) a = i;
        if(words[i] === word2) b = i;

        if(a!=-1 && b!=-1){
            min = Math.min(min, Math.abs(a-b));
        }
    }

    return min;
}


// test
let words = ["practice", "makes", "perfect", "coding", "makes"];
let word1 = 'coding';
let word2 = 'practice';

console.log(shortestWordDistance(words, word1, word2));

word1 = "makes";
word2 = "coding"
console.log(shortestWordDistance(words, word1, word2));
console.log(shortestWordDistance(words,  word2));


word1 = "makes";
word2 = "makes";
console.log(shortestWordDistance(words,  word1, word2));
console.log(shortestWordDistance( word1, word2));
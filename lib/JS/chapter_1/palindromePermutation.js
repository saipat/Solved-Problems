// *** Given a string, write a function to check if it is a permutation of palindrome.A palindrome is a word or a phrase that is same forwards and backwords.A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.

// return false if the string length is <= 1
// declare a hash
// count the no of times each letter comes as we loop th' it
// if it has more than one letter that has odd count, return false.
// else return true.


// O(n) Time and Space
// function palindrome_permutation(str) {
//     if (str.length <= 1) return false;

//     let hash = {};

//     for(let i=0; i< str.length; i++){
//         l = str[i].toLowerCase();
//         if (l === ' ') continue;
//         hash[l] = isNaN(hash[l]) ? 1 : hash[l] + 1;
//     }

//     let count = 0;
//     let keys = Object.keys(hash);

//     for(let j=0; j< keys.length; j++){
//         let c = hash[keys[j]];
//         if( c === 1) {
//             count += 1;
//         }
//         if (count >= 2){
//             return false;
//         }
//     }

//     return true;
// }


// if the string is even, there must be 2 of every characters.
// if the string is odd, there must be 1 unique char.
// use hash table to store the letters.
// if we see the same letter we can delete it.
// check the hash. if odd, 1 letter left, even no letter.
// skip spaces.

// O(n) time and space
function palindrome_permutation(str){
    if (str.length <= 1) return false;

    let hash = {};
    let charCount = 0;

    for(let i=0; i< str.length; i++){
        let cl = str[i].toLowerCase();
        if (cl === ' ') {
            continue;
        }

        if(hash[cl]){
            delete hash[cl];
        }else{
            hash[cl] = true;
        }
        charCount++;
    }

    if(charCount % 2 === 0) {
        return Object.keys(hash).length === 0
    } else{
        return Object.keys(hash).length === 1 
    }

}


// Test

console.log(`palindrome_permutation('unn') => ${palindrome_permutation('unn')}`);
console.log(`palindrome_permutation('Tact Coa') => ${palindrome_permutation('Tact Coa')};`);
console.log(`palindrome_permutation('cat') => ${palindrome_permutation('cat')};`);
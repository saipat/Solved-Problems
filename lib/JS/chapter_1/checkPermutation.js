//  *** Given two strings write a method to decide if one is a permutation of the other.

// if the 2 strings are same, return true
// if the 2 strings are of different length, return false
// if any of the 2 strings have 0 length, then return false
// sort the 2 strings and check its char at the index
// if not same return false
// in the end return true

// function isPermutation(str1, str2){
//     if (str1.length === 0 || str2.length === 0) return false;
//     if (str1 === str2) return true;
//     if (str1.length != str2.length) return false;

//     // O(nlogn)
//     str1 = str1.split('').sort();
//     str2 = str2.split('').sort();

//     // O(n)
//     return str1.every((v, i) => v === str2[i])
//     // for(let i=0; i< str1.length; i++){
//     //     if (str1[i] != str2[i]) return false;
//     // }

//     return true;
// }


// create a hash
// loop through the srt1 and increment its count inthe hash if seen
// loop through the srt2 and decrement its count inthe hash if seen
// return false if all the count is 0
// return true


// O(n) - linear time
// O(n) - space complexity
function isPermutation(str1, str2){
    if (str1.length === 0 || str2.length === 0) return false;
    if (str1 === str2) return true;
    if (str1.length != str2.length) return false;

    let letters = {}
    length = str1.length

    for(let i=0; i< length; i++){
        let ch = str1.charAt(i);
        letters[ch] = (isNaN(letters[ch]) ? 1 : letters[ch] + 1)
    }

    for(let i=0; i<length; i++){
        let ch = str2.charAt(i);
        letters[ch]--;
    }

    for(let j in letters){
        if(letters[j] != 0) return false
    }

    return true;
}


// test

console.log(`isPermutation('abc', 'abc') => ${isPermutation('abc', 'abc')}`);
console.log(`isPermutation('abcd', 'dabc') => ${isPermutation('abcd', 'dabc')}`);
console.log(`isPermutation('abc', 'dabc') => ${isPermutation('abc', 'dabc')}`);
console.log(`isPermutation('', 'dabc') => ${isPermutation('', 'dabc')}`);
console.log(`isPermutation('abc', '') => ${isPermutation('abc', '')}`);
console.log(`isPermutation('', '') => ${isPermutation('', '')}`);
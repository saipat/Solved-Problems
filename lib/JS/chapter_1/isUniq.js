//  *** Implement an algorithm to determine if a string has all unique characters.what if you cannot use additional data structures ?

//  Is Unique

// const isUniq = string => {
//     if (string.length === 0) return 'There are no chars in the string!';
//     if (string.length === 1) return true;

//     const set = new Set();

//     // O(n)
//     for(let i=0; i<=string.length; i++){
//         // O(n)
//         if(set.has(string[i])) {
//             return false;
//         }else {
//             set.add(string[i]);
//         }
//     }

//     return true;
// }


// const isUniq = string => {
// 	if (string.length === 0) return 'There are no chars in the string!';
//     if (string.length === 1) return true;

//     // O(nlogn)
//     string.sort;
    
//     // O(n)
//     for(let i=0; i< string.length; i++){
//         if(string[i] === string[i+1]) return false;
//     }

//     return true;
// };

const isUniq = string => {
    // if the given string has less than or equal to 1 char, return that they need alteast 2 chars.

    //we can use hash as its look up it O(1)

    //loop through all the chars. if the hash has that char as key already , we can return false.
    // else we can assign true to the hash

    //in the end we can return true if there are no duplicate values


    if (string.length <= 1) return 'We need atleast 2 chars to check if a given string is Uniq';

    // O(1) look up time.
    const hash = {}

    // O(n) - Linear time.
    for(let i=0; i< string.length; i++){
        if (hash[string[i]]){
            return false;
        }else{
            hash[string[i]] = true;
        }
    }

    return true;
}

// Test

console.log(`isUniq('Apple') => ${isUniq('Apple')}`);
console.log(`isUniq('Sai') => ${isUniq('Sai')}`);
console.log(`isUniq('sss') => ${isUniq('sss')}`);
console.log(`isUniq('123') => ${isUniq('123')}`);
console.log(`isUniq('12  3') => ${isUniq('12  3')}`);
console.log(`isUniq('24 24') => ${isUniq('24 24')}`);
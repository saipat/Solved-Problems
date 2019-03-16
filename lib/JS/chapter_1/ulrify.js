// *** Write a method to replace all the spaces in a string with '%20'.you may assume that the string has sufficient space at the end to hold the adiitional characters and that you are given the true length of the string.

// initializee an empty string called result.
// loop th' all the characters of the string that is trimmed of the trail spaces.
// if there is a space, then assign it to the same index in the result with %20 but not after the last character.
// else assign the character at that index of the string.
// discard the space aftert the last character.
// return the result

// O(n)
function ulrify(string){
    if (string.length === 0) return null;

    let result = ''

    for(let i=0; i< string.trim().length; i++){
        if (string[i] == ' ') {
            result += '%20'
        }else{
            result += string[i]
        }
    }

    return result;
}



//test

console.log(`ulrify('Mr John Smith     ') => ${ulrify('Mr John Smith     ')}`);
console.log(`ulrify('  Sai Pat  ') => ${ulrify('Sai Pat  ')}`);
console.log(`ulrify('') => ${ulrify('')}`);
//  *** There are three types of edits that can be performed on strings: inserts a character, remove a character, or replace a character. Given 2 strings, write a function to check if they are one edit or zero edits away.


// IOCE
// return false if the diffrence of 2 strings is more than 1.
// return false if both the srtings are empty.
// 2 pointers one for each string.
// find the length of the larger string and loop th' it.
// use a variable to store the no:of:diff.
// if the char at that particular pointer doesnt match, then increment the pointer of the larger string by 1.
// if the no: of :differences is greater than one, then return false, else true.

// O(n)
function one_away(str1, str2){
    if ((str1.length - str2.length) > 1) return false;
    if (str1.length === 0 && str2.length === 0) return false;

    let p1 = 0 , p2 = 0, count = 0;

    let larger = str1.length <= str2.length ? str2 : str1
    let smaller = str1.length > str2.length ? str2 : str1

    // console.log(larger, smaller);

    for(let i= 0 ; i<larger.length; i++){
        if(larger[p1] == smaller[p2]){
            p1 += 1;
            p2 += 1;
        }else{
            p1 += 1;
            if(larger.length === smaller.length) p2 += 1;
            count += 1;
            if (count > 1) return false;
        }
    }

    return true;
}



// test
console.log(`one_away('ple', 'pale') => ${one_away('ple', 'pale')}`);
console.log(`one_away('pale', 'bale') => ${one_away('pale', 'bale')}`);
console.log(`one_away('pale', 'bake') => ${one_away('pale', 'bake')}`);
console.log(`one_away('pale', 'pe') => ${one_away('pale', 'pe')}`);
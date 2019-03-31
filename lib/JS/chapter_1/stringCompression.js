// *** Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaa would become a2b1c5a3. If the compressed string would not become smaller than the original staring, your method should return the original string. You can assume the string has only uppercase and the lowercase letters(a-z)

// IOCE
// IO => aaabbcccd => a3b2c3d1.
// C => if the compressed string is greater than the original string then return thr original string.
// E => return '' if the string is empty. assume all are lowercase.

// take a char and compare it with the next char with 2 pointers.
// if equal store it in hash.
// else move the pointer and reset the count.
// add the char and its count to the result.
// return the original string if it is smaller than the result.
// else return result.


// O(n)
// var compress = function(str){
//     if (str.length === 0) return '';

//     let p1 = 0, p2 = 0;
//     let count = {}, result = '';

//     // O(n)
//     while(p2 < str.length) {
//         if (str[p1] === str[p2]) {
//             p2 ++;
//         }else {
//             p1 = p2;
//             p2 ++;
//         }
//         count[str[p1]]  = isNaN(count[str[p1]]) ? 1 : count[str[p1]] + 1;
//     }

//     // O(n)
//     for( var key in count){
//         result = result + key + count[key];
//     }
    
//     return (result.length > str.length ? str : result);
// };

function compress(str){
    let result = [], count = 1;

    str.split('').forEach((ch, i) => {
        if(ch != str[i+1]){
            result += ch + count;
            count = 1;
        }
        else{
            count ++;
        }
    })

    return result.length > str.length ? str : result;
}


//test

console.log(`compress('aaabccccddaa') => ${compress('aaabccccddaa')}`);
console.log(`compress('abcd') => ${compress('abcd')}`);
console.log(`compress('aabbccdd') => ${compress('aabbccdd')}`);
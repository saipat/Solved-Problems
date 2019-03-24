// Print characters of a string in multiples of N in JavaScript

// IOCE
// I => 'This is a random string to check the program', skip = 3
// O => 't 
// C =>
// E => empty string, skip 0;

// find the % to skip the chars

// O(n)
function printStringInMultiplesN(string, skip){
    let result = '';

    for(let idx = 0; idx < string.length; idx++){
        if (idx % skip === 0){
            result += string[idx];
        }
    }

    return result;
}


// test

let string = 'This is a random string to check the program';
console.log(`printStringInMultiplesN(string, 3) => ${printStringInMultiplesN(string, 3)}`);

string = 'Smoothies';
console.log(`printStringInMultiplesN(string, 2) => ${printStringInMultiplesN(string, 2)}`);


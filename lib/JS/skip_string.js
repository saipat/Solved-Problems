// Write a function that will return the output string that has n number of skipped characters in the given string.

// check is there a string, else return false
// loop th' all the chars of the string.
// if the index % skip is 0, add the char to the result.else continue
// return the result.

// O(n) time.
function skip_string(str, skip){
    if (str.length === 0) return false;
    if (skip > str.length) return false;

    let result = ''

    for(let i=0; i<str.length; i++){
        if (i % skip === 0) result += str[i];
    }

    return result;
}

// test

console.log(`skip_string('Solutions to chapter 1', 3) => ${skip_string('Solutions to chapter 1', 3)}`);
console.log(`skip_string('Dianosur', 2) => ${skip_string('Dianosur', 2)}`);
console.log(`skip_string('', 2) => ${skip_string('', 2)}`);
console.log(`skip_string('Flag', 6) => ${skip_string('Flag', 6)}`);
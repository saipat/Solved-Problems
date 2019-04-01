// Given a number N, return a string consisting of "0"s and "1"s that represents its value in base - 2(negative two).

// The returned string must have no leading zeroes, unless the string is "0".
//     Example 1:

// Input: 2
// Output: "110"
// Explantion: (-2) ^ 2 + (-2) ^ 1 = 2
// Example 2:

// Input: 3
// Output: "111"
// Explantion: (-2) ^ 2 + (-2) ^ 1 + (-2) ^ 0 = 3
// Example 3:

// Input: 4
// Output: "100"
// Explantion: (-2) ^ 2 = 4

function negativeBase(number){
    let result = [number % 2];
    let quotient = Math.floor(number/2);

    while (quotient > 0){
        let newQuotient = Math.floor(quotient/4);
        let remainder = quotient % 4;

        if(remainder === 1) {
            result.push('11');
        }else if(remainder === 2){
            result.push('10');
        }else if(remainder === 3){
            newQuotient ++;
            result.push('01')
        }else if(newQuotient > 0){
            result.push('00')
        }

        quotient = newQuotient;
    }


    return result.reverse().join('');
}



// test 
console.log(`negativeBase(2) => ${negativeBase(2)}`);
console.log(`negativeBase(3) => ${negativeBase(3)}`);
console.log(`negativeBase(4) => ${negativeBase(4)}`);

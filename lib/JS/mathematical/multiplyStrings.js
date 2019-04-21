// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
// Note:

// The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

function multiplyStrings(s1, s2){
    let num1 = convertToIntegers(s1);
    let num2 = convertToIntegers(s2);

    let result = '' + (num1 * num2);
    
    return result;
}

function convertToIntegers(str){
    let result = 0;

    let hash = {
        '0' : 0,
        '1' : 1,
        '2' : 2,
        '3' : 3,
        '4' : 4,
        '5' : 5,
        '6' : 6,
        '7' : 7,
        '8' : 8,
        '9' : 9
    }

    for(let i=0; i<str.length; i++){
        ch = str[i];

        if(ch != '0' && ch != '-'){
           result = result + hash[ch] * (10** (str.length-i-1))
        }else if(ch === '0'){
            result += 0;
        }
    }

    return str[0] === '-' ? -result : result;
}



// test
console.log(multiplyStrings('123456789', '987654321'));

// console.log(convertToIntegers('40'));
// console.log(convertToIntegers('123'));
// console.log(convertToIntegers('-123'));
// console.log(convertToIntegers('1004'));


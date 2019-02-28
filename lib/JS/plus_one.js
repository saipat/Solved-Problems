// Given a non - empty array of digits representing a non - negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function (digits) {
    if (digits.length == 0) {
        return 'digits can\'t be empty'
    }
    digits = parseInt(digits.join(''))  + 1
    return digits
};

// testing
let array = [1, 2, 3]
console.log(`Plus one ${array} => ${plusOne(array)}`);

array = [5,9,9,9]
console.log(`Plus one ${array} => ${plusOne(array)}`);

array = []
console.log(`Plus one ${array} => ${plusOne(array)}`);

array = [0]
console.log(`Plus one ${array} => ${plusOne(array)}`);
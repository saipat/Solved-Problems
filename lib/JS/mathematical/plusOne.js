
// Given a non - empty array of digits representing a non - negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Worst case all are 9's O(n) and Best case O(1)
var plusOne = function (digits) {
    if (digits.length == 0) {
        return 'digits can\'t be empty'
    }

    let i = 1, len = digits.length

    if(digits[len-1] !== 9){
        digits[len-1] += 1
        return digits
    } else {
        while (digits[len-i] === 9) {
            digits[len-i] = 0
            i++
        }
        if(i-1 === digits.length){
            digits[len] = 0
            digits[0] = 1
        } else {
            digits[len-i] += 1
        }
        return digits
    }
   
};

// this wont work for bigger size array
// digits = parseInt(digits.join(''))  + 1
// return digits.toString().split('')

// testing
let array = [1, 2, 3]
console.log(`Plus one ${array} => ${plusOne(array)}`);

array = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
console.log(`Plus one ${array} => ${plusOne(array)}`);

array = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
console.log(`Plus one ${array} => ${plusOne(array)}`);

array = [9,9,9]
console.log(`Plus one ${array} => ${plusOne(array)}`);

array = []
console.log(`Plus one ${array} => ${plusOne(array)}`);
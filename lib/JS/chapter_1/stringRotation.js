// *** Assume you have a method isSubstring which checks if one word is a substring od another.Given 2 strings s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring(e.g) "waterbottle" is a rotation of "erbottlewat".

// IOCE
// I => waterbottle
// O => erbottlewat
// C => only one call to isSubtring
// E => both do not have equal length, empty string/strings.

// check if the strings have eq length.
// call the method is Substring
// in the helper method, check if the (str1 + str1) includes str2 and return a boolean

function isStringRotate(str1, str2){

    // console.log(`str1 = ${str1}`);
    
    if (str1 === '' && str2 === '') return false;
    if (str1.length !=  str2.length) return false;
    if (str1.length === 0 || str2.length === 0) return false;

    return isSubstring(str1, str2);
}

function isSubstring(str1, str2) {
    return (str1 + str1).includes(str2);
}


// test
console.log(`isStringRotate('waterbottle', 'erbottlewat') => ${isStringRotate('waterbottle', 'erbottlewat')}`);
console.log(`isStringRotate('waterbottle', 'botertlewat') => ${isStringRotate('waterbottle', 'botertlewat')}`);
console.log(`isStringRotate('waterbottle', '') => ${isStringRotate('', 'botertlewat')}`);
console.log(`isStringRotate('', '') => ${isStringRotate('', '')}`);
// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


let addBinary = (a, b) => {
	let aRunner = a.length - 1,
		bRunner = b.length - 1,
		result = [],
		carry = 0,
        resultIndex = a.length + b.length;

	while (aRunner >= 0 || bRunner >= 0) {
        const store = parseInt(a[aRunner--] || 0) + parseInt(b[bRunner--] || 0) + carry;
		const newDigit = store % 2;
		carry = Math.floor(store / 2);
        result[resultIndex--] = newDigit;
        
	}
	if (carry) {
        result = [carry].concat(result);
        
	}

	return result.join('');
};


// test
console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));

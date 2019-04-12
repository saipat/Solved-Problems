// Convert a non - negative integer to its english words representation.Given input is guaranteed to be less than 231 - 1.

// Example 1:

// Input: 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// Example 4:

// Input: 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"


var numberToWords = function (num) {
    const to19 = `One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen`.split(' '),

        tens = `Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety`.split(' '),

        toBil = `Thousand Million Billion`.split(' ')

    let words = word(num);

    words = words.split('').join('');

    return words ? words.trim() : 'Zero';

    function word(n) {
        if (n < 20) return to19.slice(n - 1, n)[0] || '';
        if (n < 100) return tens[Math.trunc(n / 10) - 2] + ' ' + word(n % 10);
        if (n < 1000) return to19[Math.trunc(n / 100) - 1] + ' Hundred ' + word(n % 100);

        for (let i = 0, p = 1; i < toBil.length; p++ , i++) {
            if (n < 1000 ** (p + 1)) {
                return word(n / 1000 ** p) + ' ' + toBil[i] + ' ' + word(n % 1000 ** p)
            }
        }
    }
}



console.log(numberToWords(123));
console.log(numberToWords(0));
console.log(numberToWords(1290909093));

// Write a function that, given a string, returns its longest palindromic substring. A palindrome is defined as a string that is written the same forward and backward. Assume that there will only be one longest palindromic substring.

// Sample input: "abaxyzzyxf"
// Sample output: "xyzzyx"

// Time => O(n^2) and Space => O(1)

function longestPalindromicSubstring(str){
    if(!str) return null;

    let currentLongest = [0,1];

    for(let i=1; i<str.length; i++){
        const odd = getPalindromeSubs(str, i-1, i+1);
        const even = getPalindromeSubs(str, i-1, i);

        const longest = (odd[1] - odd[0]) > (even[1]-even[0]) ? odd : even;

        currentLongest = (currentLongest[1] - currentLongest[0]) > (longest[1] - longest[0]) ? currentLongest : longest;
    }

    return str.slice(currentLongest[0], currentLongest[1]);
}

function getPalindromeSubs(str, leftIdx, rightIdx){
    while(leftIdx >= 0 && rightIdx < str.length){
        if(str[leftIdx] !== str[rightIdx]) break;
        leftIdx --;
        rightIdx ++;
    }

    return [leftIdx + 1, rightIdx]
}




// test
console.log(longestPalindromicSubstring('babad'));
// console.log(longestPalindromicSubstring('abaxyzzyxf'));

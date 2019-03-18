// Given n non - negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// time => O(n) & space => O(1)
const trap = function (array) {
    if (array.length <= 2) {
        return 0
    }
    let result = 0
    let lmax = 0, rmax = 0
    let l = 0
    let r = array.length - 1

    while(l < r){
        lmax = lmax > array[l] ? lmax : array[l]
        rmax = rmax > array[r] ? rmax : array[r]
        result += lmax < rmax ? (lmax - array[l++]) : (rmax - array[r--])
    }
    
    return result
};

// testing
let input = [0, 2, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(`Trapping rain water ${input} => ${trap(input)}`);

input = [0, 1]
console.log(`Trapping rain water ${input} => ${trap(input)}`);

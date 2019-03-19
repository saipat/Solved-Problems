// write code to get the 2nd largest in an array.


// find the uniq elemnts.
// sort it.
// find the 2nd from the last.

function secondLargest(arr) {
    const uniq = [...new Set(arr)];
    uniq.sort(function(a,b) {return a-b});
    return uniq[uniq.length-2];
}

// test

console.log(`secondLargest([2,3,6,6,5]) => ${secondLargest([2, 3, 6, 6, 5])}`)
console.log(`secondLargest([1,2,3,0,9,8,7,6]) => ${secondLargest([1, 2, 3, 0, 9, 8, 7, 6])}`)
// / Given a sorted array nums, remove the duplicates in -place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

// IOCE
// I => [1, 1, 2, 2, 3, 3]
// O => 3
// C => do it in-place.
// E => Empty array or array with one element


// return the array if the array length is <= 1
// we need 2 pointers to track the previous element and for the no_duplicate index.
// iterate th' the array from left to right
// if the previous element is same as the ith element, then continue(do nothing and go to the next element)
// else assign the ith element to the previous element.
// put the ith element in the array with the index of no_duplicates
// increment the no_duplicate pointer.
// return the new array's length

// Time O(n) & space O(1)
const remove_duplicates = arr => {
    if (arr.length <= 1) return arr.length

    previous_el = 0
    no_duplicates = 0

    for(let i=0; i<arr.length; i++){
        if (arr[i] === previous_el) continue
        previous_el = arr[i]
        arr[no_duplicates] = arr[i]
        no_duplicates += 1
    }

    return no_duplicates
}

// testing
array = [1, 1, 2, 2, 3, 3]
console.log(`Remove duplicates from ${array} and return its length: ${remove_duplicates(array)}`);

array = [1, 1, 2]
console.log(`Remove duplicates from ${array} and return its length: ${remove_duplicates(array)}`);

array = [1]
console.log(`Remove duplicates from ${array} and return its length: ${remove_duplicates(array)}`);

array = []
console.log(`Remove duplicates from ${array} and return its length: ${remove_duplicates(array)}`);

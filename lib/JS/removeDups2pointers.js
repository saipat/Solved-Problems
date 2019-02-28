// Given a sorted array nums, remove the duplicates in -place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

// Time O(n) & space O(1)
const remove_duplicates = arr => {
    if (arr.length <= 0) return arr.length

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

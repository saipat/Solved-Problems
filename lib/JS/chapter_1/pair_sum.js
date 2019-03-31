// Given an array of integers, return all pairs that sum up to a specified value k. List the pairs in [min, max] order.

// initialize an empty array and a hash table.
// loop th'r the array and in each iteration find the diff btw the element and the target
// Check id the diff is in the hash table.
// if it is in the hash table, then push the pair into the result array.
// else add it to the hahs table.

// O(n)
function pair_sum(array, target){
    let hash = {};
    let result = [];

    for(let i=0; i<array.length; i++){
        let k = target - array[i];

        if(hash[k] !== undefined){
            result.push([array[i], k]);
        }

        hash[array[i]] = array[i];
    }

    return result;
}


// test;

let array = [3, 5, 2, -4, 8, 11];
console.log(pair_sum(array, 7));

// Given an array of integers, find the highest product you can get from three of the integers.

// Keep track of 5 items as we iterate th' the array.
// highest
// lowest
// highestproductOf2
// lowestProductOf2
// highestProductOf3

// Time => O(n) and space O(1)
function highestProductOf3(array){
    if(array.length <= 2){
        throw new Error('We need atleast 3 elements to find the hisgest product of 3');
    }

    let highest = Math.max(array[0], array[1]);
    let lowest = Math.min(array[0], array[1]);

    let highestproductOf2 = array[0] * array[1];
    let lowestProductOf2 = array[0] * array[1];

    let highestProductOf3 = array[0] * array[1] * array[2];

    for(let i=2; i<array.length; i++){
        let current = array[i];

        highestProductOf3 = Math.max(highestProductOf3, current * highestproductOf2, current * lowestProductOf2);

        highestproductOf2 = Math.max(highestproductOf2, current * highest, current * lowest)

        lowestProductOf2 = Math.min(lowestProductOf2, current * highest, current * lowest);

        highest = Math.max(current, highest);
        lowest = Math.min(current, lowest);
    }

    return highestProductOf3;
}


// test
console.log(highestProductOf3([2,3,1,5,4]));
// console.log(highestProductOf3([2,3]));

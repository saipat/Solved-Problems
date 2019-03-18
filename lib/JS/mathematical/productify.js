// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// IOCE
// I => [2,4,10]
// O => [40,20,8]
// C => No division.
// E => the array should have atleast 3 elements.

// Greedy Algorithm.
// implement the constraint.
// start with product 1 and empty result array.
// loop th' from 0 to array.length-1 and find the product of other numbers & store it in the result array.
// reassign the product to 1;
// loop th; from array.length-1 to 0 and multiply the product of other nos with el at the at index in the result array.
// return the result.

function productify(array){
    if(array.length <= 2) {
        throw new Error("There should atleast be 3 number in an array to find the product of 2 other numbbers");
    }

    let result = [], product = 1;

    for(let i=0; i<array.length; i++){
        result[i] = product;
        product *= array[i];
    }

    product = 1;

    for(let j=array.length-1; j >=0; j--){
        result[j] *= product;
        product *= array[j];
    }

    return result;
}



// test
console.log(`productify([2,4,10]) => ${productify([2,4,10])}`);
// console.log(`productify([2,4]) => ${productify([2,4])}`);
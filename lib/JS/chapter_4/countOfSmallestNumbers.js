// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

// Example:

// Input: [5,2,6,1]
// Output: [2,1,1,0] 
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.


// Iterate th' the array and find the no: elements smaller that.
// push the count in to a result array.
// reset the count to 0 after each iterations.

// Another approach
// sort the array;
// loop th' the original array and find the indexof that element in the new array.
// push it to the result
// delete that element.


function countSmaller(array){
    let newArr = [...array];

    newArr.sort(function(x, y) {
        return x-y;  //<=>
    })

    let result =[];

    for(let i=0; i<array.length; i++){
        let idx = newArr.indexOf(array[i]);
        result.push(idx);
        newArr.splice(idx, 1);
    }

    return result;
}


// test
console.log(countSmaller([5, 2, 6, 1]));

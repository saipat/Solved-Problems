// Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

// Example 1:
// Input: [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number; 
// The second 1's next greater number needs to search circularly, which is also 2.
// Note: The length of given array won't exceed 10000.

// Use stack but store the index in the stack instead of the numbers.
// iterate th' the array and while the stack length > 0 and find the element at that index in the stack and get that value from the array. if this is  < the current element, pop the stack and store the element in that index.
// if no push the index into the stack
// there will be still some more elements to find. repeat the abouve steps without pushing the index into the stack;
// There will be elements that has no larger elements. assign -1 to those.
// return the result;

// Time O(n*m) n => array length and m = stack length
// Space => O(n+m) => n=> result array and m => stack
function nextLarger(array){

    if(array.length <= 1) return [];

    let result = [];
    let stack = [];

    for(let i=0; i<array.length; i++){
        while(stack.length > 0 && array[stack[stack.length-1]] < array[i]){
            let smallest = stack.pop();
            result[smallest] = array[i];
        }

        stack.push(i);
    }

    for (let i = 0; i < array.length; i++) {
		while (stack.length > 0 && array[stack[stack.length - 1]] < array[i]) {
			let smallest = stack.pop();
			result[smallest] = array[i];
		}
	}

    for(let i=0; i<stack.length; i++){
        let smallest = stack.pop();
		result[smallest] = -1;
    }

    return result;
}


// test
console.log(nextLarger([1, 2, 1]));
console.log(nextLarger([1,4,2,1,2]));

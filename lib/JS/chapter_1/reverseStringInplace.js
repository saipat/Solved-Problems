// Write a function that takes an array of characters and reverses the letters in place. ↴

// IOCE
// I => 'ABCDE'
// O => 'EDCBA'
// C => do it in-place
// E => empty string, string with one characters

// use 2-pointers, left-index and right_index.
// loop thr' array of chars while left-index < right_index.
// for each iteration, swap the chars at those indices.
// after swaping, increment the left_index and decrement the right index to move towards the middle.


// Time => O(n) and Space => O(1)
function reverseStringInplace(array){
    console.log(array);
    
    let leftIndex = 0
    let rightIndex = array.length -1

    while(leftIndex < rightIndex){
        let temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;

        leftIndex ++;
        rightIndex --;
    }

    return array.join('')
}




// test
let str = 'ABCDE'
console.log(`reverseStringInplace(str.split('')) => ${reverseStringInplace(str.split(''))}`);

str = 'I am coding';
console.log(`reverseStringInplace(str.split('')) => ${reverseStringInplace(str.split(''))}`);




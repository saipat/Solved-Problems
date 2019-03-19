// You have 2 numbers represented by a linkedList, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is  at the head of the list. Write a function that adds the two numbers and returns the sums as a linked list.
// Follow up: what if the digits are not reversed.

// IOCE
// I => (7 -> 1 -> 6 ) + (5 -> 9 -> 2) => 617 + 295
// O => 2 -> 1 -> 9 => (912)
// C => returns the sum as a linked list
// E => what if the first list has 4 digits?

// loop th' each list and collects the node's values in an array(2)
// then join the arrays into a string and convert it into an interger.
// then add both the intergers.
//  convert the resulting integer into a string and split it to make an array
// now create the list from the resulting array.

function sumLists(list1, list2){
    let arr1 = [], arr2 = [];

    while (list1 != null || list2 != null){
        if(list1) {
            arr1.unshift(list1.value)
            list1 = list1.next;
        }
        if(list2) {
            arr2.unshift(list2.value)
            list2 = list2.next;
        }
    }

    const resultArray = (parseInt(arr1.join('')) + parseInt(arr2.join(''))).toString().split('');

    const result = resultArray.reverse().map((el, idx) =>  {
        if(idx != resultArray.length-1){
           return el + '->';
        }else {
            return el;
        }
    }).join('');
  
    return result;
}




// test
const List = require('./linkedList');
let list = new List();
list.append(7);
list.append(1);
list.append(6);
list.append(1);
// console.log(list.head);

list2 = new List();
list2.append(5);
list2.append(9);
list2.append(2);

console.log(`sumLists(list.head, list2.head) => ${sumLists(list.head,  list2.head)}`);

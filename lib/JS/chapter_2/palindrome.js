// Palindrome. Implement a function to check if a linked list is a palindrome.

// IOCE
// I => 0 -> 1 -> 2 -> 1 -> 0 
// O => true
// C => what does the lists hold?
// E => there is 0 or 1 node in the list.

// first reverse the linked list with the use of a helper method.
// then compare the respective node from each list.
// if all the nodes are same, then the list is palindrome.
// else not

// TIme => O(n) & Space => O(n)
// function isPalindrome(list){
//     const revList = reverseList(list.head);
    
//     let aHead = list.head;


//     while (aHead != null){
//         if (aHead.value != revList.value) {
//             return false;
//         }else{
//             aHead = aHead.next;
//             revList = revList.next;
//         }
//     }

//     return true;
// }

// // set the current node as the head.
// // make use of the temp var, node and prev.
// // take cur.next and put it in node.
// // take prev and put it in cur.next.
// // take cur and put it in prev.
// // take the node and put it in current.
// // do these steps until there is no next
// function reverseList(head ){
//     let current = head;
//     let prev = null;

//     while(current != null){
//         var node = current.next;
//         current.next = prev;
//         prev = current;
//         current = node;
//     }

//     return prev;
// }


// traverse the list and collect the values in an array.
// check the array for palindrome
// return the boolean.

// time and space => O(n)
function isPalindrome(list){
    let array = [];
    let current = list.head;

    while (current != null){
        array.push(current.value);
        current = current.next;
    }

    for(let i=0; i< Math.floor(array.length/2); i++){
        if (array[i] != array[array.length-i-1]){
            return false;
        }
    }

    return true;
}

// test
const List = require('./linkedList');
const list = new List();
list.append(0);
list.append(1);
list.append(2);
list.append(1);
list.append(0);

console.log(`isPalindrome(list.head) => ${isPalindrome(list)}`)
// console.log(reverseList(list.head))

const list2 = new List();
list2.append(0);
list2.append(1);
list2.append(2);
list2.append(1);
// console.log(reverseList(list2.head))
console.log(`isPalindrome(list2.head) => ${isPalindrome(list2)}`);
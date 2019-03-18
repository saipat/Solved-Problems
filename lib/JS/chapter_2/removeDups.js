// # *** Write code to remove duplicates from unsorted linked list.
// # How would you solve the problem if the temprorary buffer is not allowed ?


// IOCE
// I => a->a->b->c->b->d
// O => a->b->c->d
// C => dont' use temproray buffer
// E => 0 or 1 node in the list

// if there is no head or head.next is null, return the head.
// compare the current value with the next node's value if equal assifn the node's next as nodes' next 's next
// else compare the node's next value

// Time => O(n^2) and Space O(1)
// function removeDups(head){
//     if (head === null || head.next === null) return head;

//     let current = head;
//     // console.log(current);
    

//     while(current != null) {
//         let runner = current
//         while(runner.next != null){
//             if (runner.next.value === current.value) {
//                 runner.next = runner.next.next;
//             }else{
//                 runner = runner.next
//             }
//         }
//         current = current.next
//     }
    
//     console.log(head);
    
//     return head;
// }


// We can use set to store the values 
// assign the head to current
// iterate from left to right of the list
// if a value is seen, set the the set's value to 1 .
// else 0

function removeDups(head) {
    const set = new Set();

    current = head;
    previous = null;

    while (current != null) {
        if (set.has(current.value)){
            previous.next = current.next;
        }else{
            set.add(current.value);
            
            previous = current;
        }
        current = current.next;
    }
    
    console.log(set.values());
    return set
}



// test
var LinkedList = require('./linkedList')

var list = new LinkedList();
list.append('a');
list.append('b');
list.append('a');
list.append('b');
list.append('c');
// console.log(list.head);

let result = removeDups(list.head);

// console.log(`removeDups(list.head) => ${(JSON.stringify(result))}`);
console.log(`removeDups(list.head) => ${result}`);


var list1 = new LinkedList();
list1.append('a');

 result = removeDups(list1.head);

// console.log(`removeDups(list.head) => ${JSON.stringify(result)}`);
console.log(`removeDups(list.head) => ${result}`);
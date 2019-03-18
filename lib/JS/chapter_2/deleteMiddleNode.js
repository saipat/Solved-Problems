// # *** Implement an algorithm to delete a node in the middle (i.e any node but the first and the last node but not necessarily the exact middle) of a singly linkedlist, given only access to that node.

// IOCE
// I => 10 -> 20 -> 30 -> 40 -> 50
// O => 10 -> 30 -> 40 -> 50
// C => don't delete the head and the tail
// E => list can be empty or has only 2 nodes.

// store the node.next in var called next;
// assign the node's value as the nextNode's value
// assign the node's next as the nextNode's next
// return true


// time and space => O(1)
function deleteMiddleNode(node) {
    if (node === null || node.next === null) return null;

    console.log(`before deletion: ${node.value}`);
    

    let next = node.next;
    node.value = next.value;
    node.next = next.next;

    console.log(`after deletion: ${node.value}`);
    return node.value;
}




// test
var List = require('./linkedList');

let list = new List();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

// console.log(list.head.next.value);


console.log(`deleteMiddleNode(list.head.next) => ${deleteMiddleNode(list.head.next)}`)
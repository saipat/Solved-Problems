
// Given a node from a cyclic linked list which is sorted in ascending order, write a function to insert a value into the list such that it remains a cyclic sorted list.The given node can be a reference to any single node in the list, and may not be necessarily the smallest value in the cyclic list.

// If there are multiple suitable places for insertion, you may choose any place to insert the new value.After the insertion, the cyclic list should remain sorted.

// If the list is empty(i.e., given node is null), you should create a new single cyclic list and return the reference to that single node.Otherwise, you should return the original given node.

// IOCE
// I => 3->4->1->3, head = 3, insertValue = 2;
// O => 3->4->1->2->3
// C => if the node is empty, return the node with the value;
// E =>


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//Time=> O(n)
function insertIntoCycle(head, valToInsert){
    if(!head) return new Node(valToInsert);

    let prev = head;
    let current = prev.next;

    while(current != head){
        if(prev.value > current.value){
            if(prev.value <= valToInsert || valToInsert <= current.value) break;
        }
        if(prev.value <= valToInsert && valToInsert <= current.value) break;

        prev = current;
        current = current.next;
    }

    prev.next = new Node(valToInsert, current);
    return head;
}

// test
let a = new Node('3')
let b = new Node('4')
let c = new Node('1')

a.next = b;
b.next = c;
c.next = a;


console.log(insertIntoCycle(a, 2));

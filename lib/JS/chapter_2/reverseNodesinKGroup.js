// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

// Example:

// Given this linked list: 1->2->3->4->5

// For k = 2, you should return: 2->1->4->3->5

// For k = 3, you should return: 3->2->1->4->5

// Note:

// Only constant extra memory is allowed.
// You may not alter the values in the list's nodes, only nodes itself may be changed.

class LinkedLists {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function reverseKTimes(head, k){
    let root = new LinkedLists();
    root.next = head;

    let prev = root, i=0;

    while(i < k && head){
        head = head.next;
        i ++;

        if(i === k){
            
            const [reversedHead, reversedTail] = reverseList(prev.next, k);
            prev.next = reversedHead;
            reversedTail.next = head;
            prev = reversedTail;
            i = 0;
        }
        
    }
  
    
    return root.next;
}



function reverseList(head, length){
    
    let current = head, 
        prev = null, 
        nextNode;

    while(length > 0){
        nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
        length --;
    }
    // console.log([prev, current]);
    
    return [prev, current];
}



// tests
let a = new LinkedLists('1');
let b = new LinkedLists('2');
let c = new LinkedLists('3');
let d = new LinkedLists('4');
let e = new LinkedLists('5');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log("Reverse Lists => ", reverseKTimes(a, 2));


// a = new LinkedLNsts => ", reverseKTimes(a, 3));
// Given a circular linkedList, implement an algorithm that returns the node at the beginning of the loop.

// IOCE
// I => a->b->c->d->e->c (circular linkedlist)
// O => c
// C => 
// E => head points to itself, list is empty.


// use 2 pointers approach.
// slowRunner and fastRunner. fastRunner moves 2 stops and slowRunner moves 1 step
// If there is no cycle, the fasrRunner ends.
// if there is a cycle they both will eventually meet.
// return that node.

class LinkedLists {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) => time and O(1) => space
function loopDetection(head){
    let slowRunner = head;
    let fastRunner = head.next;

    while (fastRunner && fastRunner.next){
        if (fastRunner === slowRunner){
            return slowRunner.value
        }
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;
        

    }

    return null;
}


// test
const a = new LinkedLists('A');
const b = new LinkedLists('B');
const c = new LinkedLists('C');
const d = new LinkedLists('D');
const e = new LinkedLists('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = c;

console.log(`loopDetection(a) => ${loopDetection(a)}`);
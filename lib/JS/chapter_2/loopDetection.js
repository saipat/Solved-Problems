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


// O(n) => time and O(1) => space
function loopDetection(head){
    let slowRunner = head;
    let fastRunner = head;

    while (fastRunner && fastRunner.next){
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;
        

        if (fastRunner.value === slowRunner.value){
            return slowRunner.value
        }
    }

    return null;
}


// test
const List = require('./linkedList');
let list = new List();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');
list.append('c');

console.log(`loopDetection(list.head) => ${loopDetection(list.head)}`);
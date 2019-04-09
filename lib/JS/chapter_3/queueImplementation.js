// Implementation of Queue
// Strengths:
// Fast operations.All queue operations take O(1)O(1) time.
// Uses:
// Breadth - first search uses a queue to keep track of the nodes to visit next.
// Printers use queues to manage jobs—jobs get printed in the order they're submitted.
// Web servers use queues to manage requests—page requests get fulfilled in the order they're received.
// Processes wait in the CPU scheduler's queue for their turn to run.


// Worst Case
// space	O(n)
// enqueue	O(1)
// dequeue	O(1)
// peek	    O(1)

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
        this.items = [];
    }

    // create a node
    // ckeck if there is a front. If not, then add the node to both front and the back;
    // else, add the node to the back's next and make the back as the new node;
    // increment the length;
    // return the length
    enqueue(val){
        const node = new Node(val);

        if(!this.front){
            this.front = node;
            this.back = node;
        }else{
            this.back.next = node;
            this.back = node;
        }

        this.items.push(this.back.value);
        ++this.length;


        return this.items
    }

    // check if there is a front.
    // if not, return null
    // create temp var and store the front.
    // if front and the back are equal, make back null
    // make front poins to front's next.
    // decrement the length
    // return the temp valu.
    dequeue(){
        if(!this.front){
            return null;
        }
        const temp = this.front;

        if(this.front === this.back){
            this.back = null;
        }

        this.front = this.front.next;
        -- this.length;

        return temp.value;
    }

    size(){
        return this.length;
    }

    peek(){
        return this.items[0];
    }

}

module.exports = Queue;

// test

// const q = new Queue();
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);

// console.log(q);

// console.log(q.dequeue());
// console.log(q.size());
// console.log(q.peek());


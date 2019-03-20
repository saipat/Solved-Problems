// Implementation of Queue

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

        return ++this.length
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


}


// test

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q);

console.log(q.dequeue());
console.log(q.size());


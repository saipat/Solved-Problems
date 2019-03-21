// Implement a MyQueue class which implements queue with 2 stacks.

// the idea here is to push the elements into inStack first.
// then, to get the element at the bottom of the inStack, pop the elements and push it into outStack.
// And pop i toff from the outStack.
// To implement this idea, write a class for MyQueue with 2 stacks called inStack and outStack.
// Now push or enqueue the element;
// before poppinf off from the inStack, check whether the inStack length != 0
// if the outStack length is equal to 0 then pop off the element from it and push it into the outStack until it is 0;
// check to make sure that the outStack's length is not 0. If it is raise an error.
// return the popped element

// Time => take cost runtime into consideration => O(n)
// Space => O(n)
class MyQueue{
    constructor(){
        this.inStack = [];
        this.outStack = [];
    }

    enQueue(element) {
        this.inStack.push(element)
    }

    deQueue() {
        if (this.outStack.length === 0){

            while (this.inStack.length > 0){
                let element = this.inStack.pop();
                this.outStack.push(element);
            }
        }
        
        return this.outStack.pop();
    }
}


// test

const q = new MyQueue();
q.enQueue(10);
q.enQueue(20);
q.enQueue(30);

console.log(q);

console.log(q.deQueue());
console.log(q.deQueue());

console.log(q);

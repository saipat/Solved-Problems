// Implementation of Stack
// Strengths:
// Fast operations.All stack operations take O(1)O(1) time.
//     Uses:
// The call stack is a stack that tracks function calls in a program.When a function returns, which function do we "pop" back to ? The last one that "pushed" a function call.
// Depth - first search uses a stack(sometimes the call stack) to keep track of which nodes to visit next.
// String parsing—stacks turn out to be useful for several types of string parsing.


// Worst Case
// space	O(n)
// push	    O(1)
// pop	    O(1)
// peek	    O(1)



class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0
    }

    // check if there is a top.
    // if there is no top, make the node as the top and the bottom.
    // else, use a temp variable to swap the top and the 2nd top.
    push(val){
        const node = new Node(val)

        if(!this.top){
            this.top = node;
            this.bottom = node;
        }else {
            let temp = this.top;
            this.top = node;
            this.top.next = temp;
        }

        return ++this.length;
    }

    // check if there is a top.if not return null
    // store the top value in a temp var
    // check if the top and the botthom are same. if yes, assign bottom as null.
    // make next as top
    // decrement the length
    // return the temp

    pop(val){
        if(!this.top){
            return null;
        }
        const temp = this.top;

        if (this.top === this.bottom.bottom){
            this.bottom = null;
        }

        this.top = this.top.next;
        --this.length;

        return temp.value;
    }

    size(){
        return this.length;
    }
}


// test
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);
console.log(stack.size());
console.log(stack.pop(30))
console.log(stack.size());
stack.push(30);
console.log(stack);

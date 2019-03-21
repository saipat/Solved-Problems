// Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elemtns into any other data staructure(such as an array). The stack supports the following operations: push , pop, peek and isEmpty.


// Implement a stack class using array which performs push, pop, peek and isEmpty.
// write a function to orderStack from small to large using the stack as arguments
// inside the function, create a new stack and call it new stack
// while the given stack has elements, perform the pop & checks
// pop the last element from the given stack and store it in the temp var.
// while the new stack is not empty and the last element in the new stack is less than the popped element, then pop the last element from the new stack and push it into the given stack
// if not, then push the popped element fron th given stack into the new stack.
// return the new elements by itereating th'the new stack until it is empty.
// pop from it and push it into the given stack.

// TIme => O(n^2), Space => O(n)
class Stack{
    constructor() {
        this.values = [];
    }

    push(value){
        return this.values.push(value);
    }

    pop(){
        return this.values.pop();
    }

    peek(){
        return this.values[this.values.length - 1];
    }

    isEmpty(){
        return this.values.length === 0;
    }
}

function sortStack(stack){
    const newStack = new Stack();

    while (!stack.isEmpty()){
        let temp = stack.pop();

        while(!newStack.isEmpty() && newStack.peek() > temp){
            stack.push(newStack.pop());
        }

        newStack.push(temp);
    }

    while(!newStack.isEmpty()){
        stack.push(newStack.pop());
    }

    return stack;
}


const stack = new Stack();
stack.push(7);
stack.push(4);
stack.push(1);
stack.push(8);
stack.push(12);

console.log(stack);

console.log(sortStack(stack));

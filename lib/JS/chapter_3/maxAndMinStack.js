// Wrire code to access the largest element in a stack.↴

class MaxStack{
    constructor(){
        this.stack = new Stack();
        this.maxStack = new Stack();
        this.minStack = new Stack();
    }

    push(value){
        this.stack.push(value);

        if(this.maxStack.peek() === null || value >= this.maxStack.peek()){
            this.maxStack.push(value);
        }

        if(this.minStack.peek() === null || value <= this.minStack.peek()){
            this.minStack.push(value);
        }

        return [this.maxStack.peek(), this.minStack.peek()];
    }

    pop(){
        const item = this.stack.pop();

        if(item === this.maxStack.peek()){
            this.maxStack.pop()
        }
        if(item === this.minStack.peek()){
            this.minStack.pop()
        }

        return item;
    }

    getMax(){
        return this.maxStack.peek();
    }

    getMin() {
        return this.minStack.peek();
    }
}


// test
const Stack = require('./stackImplementation');

const max = new MaxStack()
max.push(100)
max.push(20)
max.push(50)
max.push(60)
max.push(10)

// ÷console.log(max.pop());


console.log(max.getMax());
console.log(max.getMin());

// Imagine a literal(stack of plates). If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data staructure that mimic this. SetOfStacks should be composed of several stacks and should createa new stack once the previous one exceeds capacity.(that is, pop() should return the same plates as it would if the there were a single stack).

// First make a stack of stacks called SetOfStacks;
// Make a basic implementation of Stack with push, pop and peek.
// Check to see if the stack is full. Assume that the stack can have only 10 plates.
// Get the last stack so that we can add plates to it.
// To Push the plate in to the last stack, get the last Stack, check if it is full.
// if yes, make a new stack and push the plate into it.
// else push the plate into the current stack.
// TO Pop the last plate from the last stack, get the last stack and pop the plate off.
// Now ckeck if the last stak is empty; if empty, pop off the stack too.
// return the poped value.

function SetOfStacks() {
    this.set = [new Stack()];
}

function Stack() {
    this.plates = [];
}

Stack.prototype.push = (plate) => {
    return this.plates.push(plate);
}

Stack.prototype.pop = () => {
    return this.plates.pop();
}

Stack.prototype.peek = function(){
    return this.plates[this.plates.length-1];
}

Stack.prototype.isFull = function() {
    return this.plates.length > 10
}

SetOfStacks.prototype.getLastStack = function() {
    return this.set[this.set.length - 1];
}

SetOfStacks.prototype.push = plate => {
    console.log(plate);
    let currentStack  = this.getLastStack();

    if(currentStack.isFull()){
        this.set.push(new Stack());
        currentStack = this.getLastStack();
    } 

    currentStack.push(plate);

    return currentStack;
}

SetOfStacks.prototype.pop = () => {
    let currentStack = this.getLastStack();
    let poppedPlate = currentStack.pop();

    if (!currentStack.plates.length){
        this.set.pop();
    }

    return poppedPlate;
}

// test
const set = new SetOfStacks();
console.log(set);
set.push(10);
console.log(set.getLastStack());
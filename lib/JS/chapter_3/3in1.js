// Describe how you could use a single array to implement 3 stacks.


// Approach 1 => Fixed Division
// we can divide array into 3 equal parts and allow array to grow
// (0,n/3)(n/3, 2n/3)(2n/3, n)

class ThreeInOne{
    constructor(noOfStacks, stackSize){
        this.stackCapacity = stackSize;
        this.values = Array(stackSize * noOfStacks);
        this.sizes = Array(noOfStacks);

        // console.log(this.sizes);
    }

    // check that we have a space for our next element. if is full, then return null.
    // Increment the stack index and update the top value;
    push(stackIndex, value){
        if(this.isFull(stackIndex)){
            return null;
        }
        this.sizes[stackIndex] = isNaN(this.sizes[stackIndex]) ? 1 : this.sizes[stackIndex] + 1;
        
        this.values[this.atTop(stackIndex)] = value;
    }

    // To check if the stack is full, compare the sizes array at the given stackIndex with the stackCapacity
    isFull(stackIndex){
        // console.log(this.sizes[stackIndex]);
        
        return this.sizes[stackIndex] === this.stackCapacity;
    }

    atTop(stackIndex){
        let offset = stackIndex * this.stackCapacity - 1;
        let size = this.sizes[stackIndex];
        // console.log(size, offset);
        
        return offset + size ;
    }

}

// test
const stackSize = 10;
const noOfStacks = 3
const s = new ThreeInOne(3, 10);

// console.log(s);


s.push(0, 2);
s.push(0, 2);
s.push(0, 2);
s.push(0, 2);
s.push(0, 2);
s.push(2, 4);
s.push(2, 3);
s.push(1, 30);
console.log(s);




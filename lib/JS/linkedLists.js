class LinkedListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

console.log(a);

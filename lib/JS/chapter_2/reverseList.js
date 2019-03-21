class LinkedLists {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const reverseList = head => {
    if (!head) return null
    let current = head;
    let previous = null;
    let next_node = null;

    while (current) {
        next_node = current.next;
        current.next = previous;
        previous = current;
        current = next_node;
    }

    return previous
}

// tests
const a = new LinkedLists('A');
const b = new LinkedLists('B');
const c = new LinkedLists('C');
const d = new LinkedLists('D');
const e = new LinkedLists('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log("Reverse Lists => ", reverseList(a));
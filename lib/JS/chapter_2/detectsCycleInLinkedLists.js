class LinkedLists {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// O(n) time and O(1) space
const containsCycle = head => {
    if (!head || !head.next) return false;
    if (head.next === head) return true;

    let slowRunner = head, fastRunner = head;

    while(fastRunner && fastRunner.next) {
        slowRunner = slowRunner.next
        fastRunner = fastRunner.next.next

        if(slowRunner === fastRunner) {
            return true;
        }
    }
    

    return false;
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
e.next = a;
console.log("Contains Cycle ? ", containsCycle(a));

a.next = b;
b.next = c;
c.next = b;
console.log("Contains Cycle ? ", containsCycle(a));

a.next = a;
console.log("Contains Cycle ? ", containsCycle(a));

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;
console.log("Contains Cycle ? ", containsCycle(a));

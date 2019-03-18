class LinkedListNode{
    constructor(value){
        this.head = {
            value, 
            next: null
        }
    }

    add(val){
        let current = this.head;

        
        while (current.next != null){
            current = current.next
        }

        current.next = new LinkedListNode(val)
        return this
    }

    display(){
        let current = this.head;
    }
}


const a = new LinkedListNode('A');
// const b = new LinkedListNode('B');
// const c = new LinkedListNode('C');

// a.next = b;
// b.next = c;

console.log(a);
console.log(a.add(5));
console.log(a.add(10));
console.log(a.add(15));


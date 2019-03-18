// Linked List Implementation
// isEmpty?
// prepend
// append
// Size
// remove
// contains
// print


function LinkedList(){
    this.head = null;
}

LinkedList.prototype.isEmpty = function() {
    return this.head === null;
}

// [10] -> [20] -> [30] -> null
// initilaize a counter;
// traverse th' the list and increment the counter if the node.next is not null
LinkedList.prototype.size = function() {
    let count = 0;
    let current = this.head;

    while(current != null){
        current = current.next;
        count ++;
    }

    return count;
}

// [10] -> [20] -> [30] -> null
// this.head = [10]
// create a new node with the given value.
// make this point to the current head.
// update this.head to point to the head
LinkedList.prototype.prepend = function(val) {
    const newNode = {
        value: val,
        next: this.head
    };

    this.head = newNode;
}

var list = new LinkedList();
console.log(list.isEmpty());
console.log(list.size());
list.prepend(10);
list.prepend(5);

console.log(list);


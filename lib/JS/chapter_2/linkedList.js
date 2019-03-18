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

// create a new node with the given val.
// keep your current as your head.
// while the current.next != null, make the current as current.next
// once we get to the last node, make the last node point to the new node value.
LinkedList.prototype.append = function(val) {
    const newNode = {
        value: val,
        next: null
    };

    if (this.isEmpty()) {
        this.head = newNode;
        return;
    }

    let current = this.head;

    while (current.next != null){
        current = current.next
    }

    current.next = newNode;
}

// [10] -> [20] -> [30] -> null
//make the head as the current
// traverse th' the loop and if the val is found return true
// else false

LinkedList.prototype.contains = function(val) {
    let current = this.head;

    while (current != null){
        if (current.value === val) return true;
        current = current.next;
    }

    return false;
}

// [10] -> [15] -> [20] -> [30] -> null
// check id the given value is in the list.
// check if the head.value === val. if it is, make this.head points to this.head.next
// keep 2 pointer -> prev=null and current= this.head
// traverse th' the list.
// if a val matched then make the prev.next points to the current.next

LinkedList.prototype.remove = function(val){
    if (!this.contains(val)) return;

    if (this.head.value === val){
        this.head = this.head.next;
        return;
    }

    let prev = null;
    let current = this.head

    while(current.value != val){
        prev = current;
        current = current.next
    }

    prev.next = current.next;
}

// [10] -> [15] -> [20] -> [30] -> null
// [10, 15, 20, 30]
// need a var result to store the values.
// make this.head = current.
// traverse th' the list and push the values.
// return result

LinkedList.prototype.print = function () {
    let result = [];
    let current = this.head;
    
    while (current != null){
        result.push(current.value);
        if (current.next != null){
            result.push('->')
        }
        current = current.next;
    }

    return result.join('');
}



// test

var list = new LinkedList();
console.log(list.isEmpty());
console.log(list.size());
list.prepend(10);
list.prepend(5);
list.prepend(2);
console.log(list);
list.append(15)
console.log(list);
console.log(list.contains(10));
list.remove(5);
console.log(list);

var list2 = new LinkedList();
list2.append(5);
list2.append(10);
list2.append(15);
list2.append(20);
list2.append(25);
list2.append(30);
console.log(list2.print());
console.log(list2.size());



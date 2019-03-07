class LinkedList {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const reverseList = head => {
    let current = head;
    let previous = null;
    let next_node;

    while (current) {
        next_node = current.next;
        current.next = previous;
        previous = current;
        current = next_node;
    }

    head = previous;
    return head;
}
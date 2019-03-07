class LinkedLists {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

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


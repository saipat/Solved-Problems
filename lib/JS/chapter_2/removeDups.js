// # *** Write code to remove duplicates from unsorted linked list.
// # How would you solve the problem if the temprorary buffer is not allowed ?


// IOCE
// I => a->a->b->c->b->d
// O => a->b->c->d
// C => dont' use temproray buffer
// E => 0 or 1 node in the list

// if there is no head or head.next is null, return the head.
// compare the current value with the next node's value if equal assifn the node's next as nodes' next 's next
// else compare the node's next value

// Time => O(n^2) and Space O(1)
function removeDups(head){
    if (head === null || head.next === null) return head;

    let current = head;
    // console.log(current);
    

    while(current != null) {
        let runner = current
        while(runner.next != null){
            if (runner.next.value === current.value) {
                runner.next = runner.next.next;
            }else{
                runner = runner.next
            }
        }
        current = current.next
    }
    
    console.log(head);
    
    return head;
}




// test
var LinkedList = require('./linkedList')

var list = new LinkedList();
list.append('a');
list.append('b');
list.append('a');
list.append('b');
list.append('c');
// console.log(list.head);

let result = removeDups(list.head);

console.log(`removeDups(list.head) => ${(JSON.stringify(result))}`);


var list1 = new LinkedList();
list1.append('a');

 result = removeDups(list1.head);

console.log(`removeDups(list.head) => ${JSON.stringify(result)}`);
// #  *** Implement an algorithm to find kth_to_last element of a singly linked list

// IOCE
// I => a->b->c->d->e , 2
// O => d
// C => if the size is known it is easy to implement.
// E => if k is larger than the list size. empty list


// if the head is null or the head.next is null, return head
// make sure whether you know the size.
// if you know the size, subtract the k from the size and find the node at the index.
// if size is not know you, we can use recursion but we can get the index.

// recursion
function kthToLast(head, k){
    if (head === null){
        return 0
    }
    let index = kthToLast(head.next, k) + 1
    if (index === k) {
        console.log(`kth to the last node is ${head.value}`)
    }

    return index
}



// test

const List = require('./linkedList');

let list = new List();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log(`kthToLast(list.head, 2) => ${kthToLast(list.head, 2)}`);
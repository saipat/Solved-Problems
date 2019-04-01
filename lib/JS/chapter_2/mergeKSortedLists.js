// Merge k sorted linked lists and return it as one sorted list.Analyze and describe its complexity.

// IOCE

// Input:
// [
//     1 -> 4 -> 5,
//     1 -> 3 -> 4,
//     2 -> 6
// ]
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// check if the lists length is 0. it it is return null;
// use recursion to merge the arrays
// have lists, 0, lists.length-1 as arguments for the function.
// find the mid point
// find l1 and l2 with the mid points and merge the 2 lists.

class LinkedLists {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Time Complexity (n klogk)
function mergeKSortedLists(lists){
    if(!lists || !lists.length) return null;

    return mergeKLists(lists, 0, lists.length-1);
}

function mergeKLists(lists, left, right){
    if(left === right) return lists[left];

    let mid = Math.floor((left+right)/2);

    let l1 = mergeKLists(lists, left, mid);
    let l2 = mergeKLists(lists, mid+1, right);

    return merge(l1, l2);
}

function merge(l1,l2){
    if(!l1) return l2;
    if(!l2) return l1;
    if(!l1 && !l2) return null;

    let result = new LinkedLists(-1);
    let current = result;

    while(l1 && l2){
        if(l1.val <l2.val){
            current.next = new LinkedLists(l1.val);
            current = current.next;
            l1 = l1.next;
        }else{
            current.next = new LinkedLists(l2.val);
			current = current.next;
			l2 = l2.next;
        }
    }

    if(l1){
        current.next = l1
    }else{
        current.next = l2
    }

    return result.next;
}


// test
let a = new LinkedLists(2);
let b = new LinkedLists(2);
let c = new LinkedLists(3);
let d = new LinkedLists(4);
let e = new LinkedLists(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;


let a1 = new LinkedLists(0);
let b1 = new LinkedLists(6);
let c1 = new LinkedLists(7);
let d1 = new LinkedLists(8);
let e1 = new LinkedLists(9);

a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;

let a2 = new LinkedLists(1);
let b2 = new LinkedLists(6);
let c2 = new LinkedLists(7);
let d2 = new LinkedLists(8);
let e2 = new LinkedLists(10);

a2.next = b2;
b2.next = c2;
c2.next = d2;
d2.next = e2;

let lists = [a,a1,a2]

console.log(mergeKSortedLists(lists));


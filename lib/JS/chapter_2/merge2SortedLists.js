// Merge 2 sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Example:

// IOCE
// Input: 1 -> 2 -> 4, 
//        1 -> 3 -> 4
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

class LinkedLists{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// Time => O(n+m)
function merge2SortedLists(l1,l2){
    if (!l2) return l1;
    if (!l1) return l2;
    if (!l1 && !l2) return null;

    let result = new LinkedLists(-1);
    let current = result;

    while(l1 && l2){
        if(l1.val < l2.val){
            current.next = new LinkedLists(l1.val);
            current = current.next;
            l1 = l1.next;
        }else{
            current.next = new LinkedLists(l2.val);
			current = current.next;
			l2 = l2.next;
        }
    }

    // to join the rest of the nodes.
    if(l1){
        current.next = l1;
    }else{
         current.next = l2;
    }

    // console.log(JSON.stringify(result.next));
    
    return result.next;
}


// test
let a = new LinkedLists(1);
let b = new LinkedLists(2);
let c = new LinkedLists(2);
let d = new LinkedLists(3);
let e = new LinkedLists(4);

a.next = b;
b.next = c;
c.next = d;
d.next = e;


let a1 = new LinkedLists(0);
let b1 = new LinkedLists(1);
let c1 = new LinkedLists(5);
let d1 = new LinkedLists(6);
let e1 = new LinkedLists(7);

a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;


console.log(merge2SortedLists(a, a1));
console.log(merge2SortedLists(a));
console.log(merge2SortedLists(a1));

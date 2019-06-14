// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.


// Example 1:

// Input:
// {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

// Explanation:
// Node 1's value is 1, both of its next and random pointer points to Node 2.
// Node 2's value is 2, its next pointer points to null and its random pointer points to itself.

function ListNode(val, next, random){
    this.val = val;
    this.next = next;
    this.random = random;
}


function copyRandomListPointer(head){
    let dummy = new ListNode(NaN, null, null);
    let p = dummy;
    let q = head;
    let map = new Map();

    while(q){
        let newNode = new ListNode(q.val, null, null);
        p.next = newNode;
        map.set(q, newNode);

        p = p.next;
        q = q.next;
    }

    p = dummy.next;
    q = head;

    while(q){
        if(q.random){
            p.random = map.get(q.random);
        }

        p = p.next;
        q = q.next;
    }

    return dummy.next;
}
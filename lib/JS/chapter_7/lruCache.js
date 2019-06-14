 // Design and implement a data structure for Least Recently Used(LRU) cache.It should sup'p'ort the following operations: get and pu't'''.

//     get(key) - Get the value(will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present.When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// Follow up:
// Could you do both operations in O(1) time complexity ?

//     Example :

//     LRUCache cache = new LRUCache(2 /* capacity */);

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

// BruteFore with O(n)
// class LRUCache{
//     constructor(size){
//         this.size = size;
//         this.cache = [];
//     }

//     count(){
//         return this.cache.length;
//     }

//     put(el){
//         if(this.cache.includes(el)){
//             this.cache.delete(el);
//         }else if(this.count() >= this.size){
//             this.cache.shift();
//         }

//         this.cache.push(el);
//     }

//     get(el){
//         if(this.cache.includes(el)){
//             return el;
//         }else{
//             return -1;
//         }
//     }
// }


class ListNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.dummy = this.tail = new ListNode();
        this.nodes = new Map();
        this.capacity = capacity;
    }

    put(key, value) {
        this.remove(key);

        if (this.nodes.size === this.capacity) {
            this.remove(this.dummy.next.key);
        }

        const newNode = new ListNode(key, value)

        const oldTail = this.tail;
        this.tail = oldTail.next = newNode;
        this.tail.prev = oldTail;

        this.nodes.set(key, this.tail);
    }

    remove(key) {
        const node = this.nodes.get(key);

        if (!node) return;
        
        node.prev.next = node.next;
        
        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }
        this.nodes.delete(key);
    }

    get(key) {
        if (this.nodes.has(key)) {
            // this.put(key, this.nodes.get(key).val);
            return this.nodes.get(key).val;
        }
        return -1;
    }
}


// test
const c = new LRUCache(4);

c.put('a', 20)
c.put('b', 40)
c.put('c', 60)
c.put('d', 80)
c.put('e', 100)
// c.get('a');

console.log(c);
// console.log(c.get('a'));c


// c.put('b', 40)
// c.put('c', 60)
// c.put('d', 100)
// c.put('e', 100)
// c.put('f', 90)
// console.log(c);

// console.log(c.get('c'));
// console.log(c.get('f'));


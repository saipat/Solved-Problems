// Design and implement a data structure for Least Recently Used(LRU) cache.It should support the following operations: get and put.

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
class LRUCache{
    constructor(size){
        this.size = size;
        this.cache = [];
    }

    count(){
        return this.cache.length;
    }

    put(el){
        if(this.cache.includes(el)){
            this.cache.delete(el);
        }else if(this.count() >= this.size){
            this.cache.shift();
        }

        this.cache.push(el);
    }

    get(el){
        if(this.cache.includes(el)){
            return el;
        }else{
            return -1;
        }
    }
}


// test
const c = new LRUCache(3);
c.put(20)
c.put(40)
c.put(60)
c.put(100)
console.log(c);
console.log(c.count());
console.log(c.get(78));
console.log(c.get(100));


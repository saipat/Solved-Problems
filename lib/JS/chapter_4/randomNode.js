// Random Node: You are implementing a binary tree class from scratch which, in addition to insert, find, and delete, has a method getRandomNode() which returns a random node from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm for getRandomNode, and explain how you would implement the rest of the methods.


class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value){
        if(!this.value){
            this.value = value;
        }else if(value < this.value){
            if(!this.left){
                this.left = new BinaryTree(value);
            }else{
                this.left.insert(value);
            }
        }else{
            if (!this.right){
                this.right = new BinaryTree(value);
            }else{
                this.right.insert(value);
            }
        }
        return this;
    }

    find(value){
        if(!this.value) return null;
        if(value === this.value){
            return this.value;
        }else if(value < this.value) {
            if(this.left === null){
                return null
            }else{
                return this.left.find(value);
            }
        }
        else {
            if (this.right === null) {
                return null
            } else {
                return this.right.find(value);
            }
        }
    }

    count(){
        let q = new Queue();
        let node;
        let count = 0;
        q.enqueue(this);

        while(q.size() != 0 ){
            node = q.dequeue();
            count ++;
            if(node.left){
                q.enqueue(node.left)
            }
            if(node.right){
                q.enqueue(node.right)
            }
        }

        return count;
    }

    getRandomNode(){
        if(!this.value) return null;

        let count = this.count();
        let random = Math.floor(Math.random() * count);
        return this.getIthNode(random);
    }

    getIthNode(random){
        let leftSize = this.left === null ? 0 : this.left.count();
        
        if(random < leftSize){
            return this.left.getIthNode(random);
        }else if ( random === leftSize){
            return this;
        }else{
            return this.right.getIthNode(random - (leftSize + 1));
        }
    }

} 


// test
const Queue = require('../chapter_3/queueImplementation');

const tree = new BinaryTree();

tree.insert(4);
tree.insert(2);
tree.insert(1);
tree.insert(0);
tree.insert(3);
tree.insert(6);
tree.insert(5);
tree.insert(7);
console.log(tree.right.right);

console.log(tree.find(7));
console.log(tree.count());
console.log(tree.getRandomNode());

// console.log(this.left.count());



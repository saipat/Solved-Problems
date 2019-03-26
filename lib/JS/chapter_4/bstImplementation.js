class Node{
    constructor(value){
        this.value = value;
        this.left = null;
		this.right = null;
    }
}

class BinarySearchTree {
	constructor() {
        this.root = null;
	}

	// to insert a new node
	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
        }
	}

	// to traverse the tree to find a spot for the new node.
	insertNode(root_node, newNode) {
		if (newNode.value <= root_node.value) {
			if (root_node.left === null) {
				root_node.left = newNode;
			} else {
				this.insertNode(root_node.left, newNode);
			}
		} else {
			if (root_node.right === null) {
				root_node.right = newNode;
			} else {
				this.insertNode(root_node.right, newNode);
			}
		}

		return root_node;
	}

	remove(value) {
        this.root = this.removeNode(this.root, value);
        return this.root;
	}

	removeNode(root_node, value) {
		if (!root_node) return null;
        // console.log(root_node);
		if (value < root_node.value) {
			root_node = this.removeNode(root_node.left, value);
			return root_node;
		} else if (value > root_node.value) {
			root_node = this.removeNode(root_node.right, value);
			return root_node;
		} else {
            // console.log(root_node);
            
			if (root_node.left === null && root_node.right === null) {
				root_node = null;
				return root_node;
			} else if (root_node.left === null) {
				root_node = root_node.right;
				return root_node;
			} else if (root_node.right === null) {
				root_node = root_node.left;
				return root_node;
			} else {
				let temp = this.findMinRightNode(root_node.right);
				root_node = temp;
                root_node.right = this.removeNode(root_node.right, temp.value);
                
				return root_node;
			}
		}
	}

	// if left of a node is null then it must be minimum node
	findMinRightNode(node) {
		if (node.left === null) {
            // console.log(node);
            
			return node;
		} else {
			return this.findMinRightNode(node.left);
		}
    }
    
    inorder(node = this.root){

        
        if (!node) return [];

        let left = this.inorder(node.left);
        
        let right = this.inorder(node.right);

        return left + [node.value] + right;
    }

    preorder(node = this.root){
        if (!node) return [];

        let left = this.inorder(node.left);
        let right = this.inorder(node.right);

        return [node.value] + left + right;
    }

    postorder(node = this.root) {
        if (!node) return [];

        let left = this.inorder(node.left);
        let right = this.inorder(node.right);

        return left + right + [node.value] ;
    }


}


// test
const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(6);
bst.insert(7);
bst.insert(5);
// console.log(bst.remove(2));

// bst.remove(2);

console.log(bst);

console.log(bst.inorder());
console.log(bst.preorder());
console.log(bst.postorder());

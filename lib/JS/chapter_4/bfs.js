// Implement bfs.

class Node {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	addChild(name) {
		this.children.push(new Node(name));
		return this;
	}

	// Time => O(E+V) & Space => O(V)
	bfs(root) {
		const queue = [this];
		let array = [];
		
		while (queue.length > 0) {
			const current = queue.shift();

			array.push(current.name);
			queue.push(...current.children)
		}

		return array;
	}
}

// test 
const root = new Node("A")
// console.log(root)
root.addChild('B');
root.addChild('D')
// console.log(root);
root.children[0].addChild('C').addChild('E');
root.children[1].addChild('F');
console.log(root.bfs(root));


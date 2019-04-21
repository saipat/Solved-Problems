class MaxHeap {
	constructor() {
		this.array = [null];
	}

	// O(log(n))
	insert(val) {
		this.array.push(val);
		this.siftUp(this.array.length - 1);
	}

	siftUp(idx) {
		if (idx === 1) return;
		
		let parentIdx = this.getParent(idx);

		if (this.array[parentIdx] < this.array[idx]) {
			[this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
			this.siftUp(parentIdx);
		}
	}

	getParent(idx) {
		return Math.floor(idx / 2);
	}
}



// test
let maxHeap = new MaxHeap();
maxHeap.insert(42);
maxHeap.insert(24);
maxHeap.insert(100);
maxHeap.insert(60);

console.log(maxHeap.array);

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

	// O(logn)
	deleteMax() {
		let max = this.array[1];
		this.array[1] = this.array.pop();

		this.siftDown(1);

		return max;
	}

	siftDown(idx) {
		let leftIdx = this.getLeftChild(idx);
		let rightIdx = this.getRightChild(idx);

		let ary = this.array;

		let leftVal = ary[leftIdx];
		let rightVal = ary[rightIdx];

		if (leftVal === undefined) leftVal = -Infinity;
		if (rightVal === undefined) rightVal = -Infinity;
	
		if (ary[idx] > leftVal && ary[idx] > rightVal) return;

		let swapIdx;
		if (leftVal < rightVal) {
			swapIdx = rightIdx;
		} else {
			swapIdx = leftIdx;
		}

		[ary[idx], ary[swapIdx]] = [ary[swapIdx], ary[idx]];

		this.siftDown(swapIdx);
	}

	getLeftChild(idx) {
		return idx * 2;
	}

	getRightChild(idx) {
		return idx * 2 + 1;
	}
}



// test
let maxHeap = new MaxHeap();
maxHeap.insert(45);
maxHeap.insert(32);
maxHeap.insert(24);
maxHeap.insert(100);
maxHeap.insert(35);
maxHeap.insert(60);

console.log(maxHeap.array);

console.log(maxHeap.deleteMax());

console.log(maxHeap.array);



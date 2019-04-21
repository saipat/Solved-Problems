// A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).

// Buildings  Skyline Contour
// The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

// For instance, the dimensions of all buildings in Figure A are recorded as: [ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

// The output is a list of "key points" (red dots in Figure B) in the format of [ [x1,y1], [x2, y2], [x3, y3], ... ] that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

// For instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].

// Notes:

// The number of buildings in any input list is guaranteed to be in the range [0, 10000].
// The input list is already sorted in ascending order by the left x position Li.
// The output list must be sorted by the x position.
// There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...[2 3], [4 5], [7 5], [11 5], [12 7]...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...[2 3], [4 5], [12 7], ...]


class maxHeap {
	constructor() {
		this.data = [null];
	}

	swap(i, j) {
		const tmpNode = this.data[i];
		this.data[i] = this.data[j];
		this.data[j] = tmpNode;
	}

	addNode(node) {
		this.data.push(node);
		if (this.data.length === 2) {
			return;
		} else {
			this.bubbleUp(this.data.length - 1);
		}
	}

	removeMax() {
		if (this.data === 1) {
			return null;
		} else {
			this.swap(this.data.length - 1, 1);
			const ret = this.data.pop();
			this.bubbleDown(1);
		}
	}

	bubbleDown(i) {
		const largestChild = this.data[i * 2 + 1] && this.data[i * 2 + 1].h > this.data[i * 2].h ? i * 2 + 1 : i * 2;
		if (this.data[largestChild] && this.data[largestChild].h > this.data[i].h) {
			this.swap(largestChild, i);
			this.bubbleDown(largestChild);
		}
	}

	bubbleUp(i) {
		const parentIndex = Math.floor(i / 2);
		if (this.data[parentIndex] && this.data[parentIndex].h < this.data[i].h) {
			this.swap(parentIndex, i);
			this.bubbleUp(parentIndex);
		}
	}

	deleteNode(node) {
		const nodeIndex = this.data.indexOf(node);
		if (nodeIndex === -1) {
			return false;
		} else if (nodeIndex === this.data.length - 1) {
			this.data.pop();
		} else {
			this.swap(this.data.length - 1, nodeIndex);
			this.data.pop();
			const parentIndex = Math.floor(nodeIndex / 2);
			if (this.data[parentIndex] && this.data[parentIndex].h < this.data[nodeIndex].h) {
				this.bubbleUp(nodeIndex);
			} else {
				this.bubbleDown(nodeIndex);
			}
		}
	}

	getMaxHeight() {
		if (this.data.length === 1) {
			return 0;
		} else {
			return this.data[1].h;
		}
	}
}

var getSkyline = function(buildings) {
	const buildingHeap = new maxHeap(),
		skylines = [];
	let ret = [];

	buildings.forEach(b => {
		const start = { type: 1, x: b[0], h: b[2] };
		const end = { type: 2, x: b[1], start: start };
		skylines.push(start, end);
	});

	skylines.sort((s1, s2) => {
		if (s1.x !== s2.x) {
			return s1.x - s2.x;
		} else if (s1.type !== s2.type) {
			return s1.type - s2.type;
		} else if (s1.type === 1) {
			return s1.h - s2.h;
		} else {
			return s1.start.h - s2.start.h;
		}
	});

	skylines.forEach(skyline => {
		if (skyline.type === 1) {
			if (skyline.h > buildingHeap.getMaxHeight()) {
				ret = ret.filter(r => r[0] !== skyline.x);
				ret.push([skyline.x, skyline.h]);
			}
			buildingHeap.addNode(skyline);
		} else {
			buildingHeap.deleteNode(skyline.start);
			if (skyline.start.h > buildingHeap.getMaxHeight()) {
				ret.push([skyline.x, buildingHeap.getMaxHeight()]);
			}
		}
	});
	return ret;
};



// test
console.log(getSkyline([ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ]));

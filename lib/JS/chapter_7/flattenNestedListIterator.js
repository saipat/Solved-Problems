// Given a nested list of integers, implement an iterator to flatten it.

// Each element is either an integer, or a list -- whose elements may also be integers or other lists.

// Example 1:

// Input: [[1,1],2,[1,1]]
// Output: [1,1,2,1,1]
// Explanation: By calling next repeatedly until hasNext returns false, 
//              the order of elements returned by next should be: [1,1,2,1,1].
// Example 2:

// Input: [1,[4,[6]]]
// Output: [1,4,6]
// Explanation: By calling next repeatedly until hasNext returns false, 
//              the order of elements returned by next should be: [1,4,6].

// given isInteger(), getInteger() & getList() funtions


const NestedIterator = function(nestedList) {
	this.list = [];
	this.index = -1;

	function flatten(nestedList, list) {
		for (let i = 0; i < nestedList.length; i++) {
			if (nestedList[i].isInteger()) {
				list.push(nestedList[i].getInteger());
			} else {
				flatten(nestedList[i].getList(), list);
			}
		}
	}

	flatten(nestedList, this.list);
};

NestedIterator.prototype.hasNext = function(){
    return this.index < this.list.length - 1;
}

NestedIterator.prototype.next = function(){
    this.index ++;
    return this.list[index];
}


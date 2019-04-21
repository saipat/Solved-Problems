// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]


function subsets(arr) {
	if (!arr.length) return [[]];
	const last = arr[arr.length - 1];
    const subs = subsets(arr.slice(0, arr.length - 1));
	return subs.concat(
		subs.map(el => {
            let newArr = el.slice(0);
            
			newArr.push(last);
			return newArr;
		})
	);
}


// test
console.log(subsets([1,2,3]));

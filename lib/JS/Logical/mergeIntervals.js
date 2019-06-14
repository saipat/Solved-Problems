// Given a collection of intervals, merge all overlapping intervals.

//Example 1:
// Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].

// Example 2:
// Input: [[1, 4], [4, 5]]
// Output: [[1, 5]]
// Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.


var mergeIntervals = function (intervals) {
    if (intervals.length === 0) {
        return [];
    }
    
    intervals.sort( (a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    })

    console.log(intervals);
    

    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let time = result[result.length - 1];
        // console.log(intervals[i][0] <= time[1]);
        
        if (intervals[i][0] <= time[1]) {
            // console.log(intervals[i][1] > time[1]);
            
            if (intervals[i][1] > time[1]) {
                time[1] = intervals[i][1];
            }
            // console.log(`result => ${result}`);
        }
        else {
            result.push(intervals[i]);
        }
        
    }

    return result;
};



// test
let interval = [[1,3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(interval));
 interval = [[1, 4], [4, 5]];
console.log(mergeIntervals(interval));

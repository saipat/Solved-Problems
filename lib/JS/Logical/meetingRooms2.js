// Given an array of meeting time intervals consisting of start and end times[[s1, e1], [s2, e2],...](si < ei), find the minimum number of conference rooms required.

//     Example 1:

// Input: [[0, 30], [5, 10], [15, 20]]
// Output: 2
// Example 2:

// Input: [[7, 10], [2, 4]]
// Output: 1

// C => s < e
// E => only one time array.

//  * function Interval(start, end) {
//  * this.start = start;
//  * this.end = end;
//  * }

function meetingRooms2(intervals){

    let rooms = 0, idx=0;

    let start = intervals.sort(function(a,b){
        return a[0] - b[0];
    })

    let end = intervals.sort(function(a,b){
        return a[1] - b[1];
    })

    // console.log(start)
    // console.log(end)

    for(let i= 0; i<intervals.length; i++){
        if(start[i][0] < end[idx][1]){
            rooms++;
        }else{
            idx++;
        }
    }

    return rooms;
}




// test
console.log(`meetingRooms2([[0, 30], [5, 10], [15, 20]]) => ${meetingRooms2([[0, 30], [5, 10], [15, 20]])}`);
console.log(`meetingRooms2([[7, 10], [2, 4]]) => ${meetingRooms2([[7, 10], [2, 4]])}`);
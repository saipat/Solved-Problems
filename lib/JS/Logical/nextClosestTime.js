// Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits.There is no limit on how many times a digit can be reused.

// You may assume the given input string is always valid.For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

//     Example 1:

// Input: "19:34"
// Output: "19:39"
// Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19: 39, which occurs 5 minutes later.It is not 19: 33, because this occurs 23 hours and 59 minutes later.
//     Example 2:

// Input: "23:59"
// Output: "22:22"
// Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22: 22. It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.


var nextClosestTime = function (time) {
    let arr = [];
    arr.push(time[0]);
    arr.push(time[1]);
    arr.push(time[3]);
    arr.push(time[4]);
    
    arr = arr.map(value => +value);

    arr.sort((a, b) => (a - b));

    let t = [time[0], time[1], time[3], time[4]];

    for (let i = t.length - 1; i >= 0; i--) {
        for (let n of arr) {
            if (n > parseInt(t[i])) {
                let temp = t[i];
                t[i] = n + "";
                
                if ((parseInt(t[0]) * 10 + parseInt(t[1])) < 24 && (parseInt(t[2]) * 10 + parseInt(t[3])) < 60) {
                    t.splice(2, 0, ":");
                    return t.join("");
                }
                
                t[i] = temp;
                // console.log(t[i]);
            }
        }
        t[i] = arr[0];// set to the minimum value
    }
    t.splice(2, 0, ":");
    return t.join("");
};


console.log(nextClosestTime('19:34'));
console.log(nextClosestTime('23:59'));
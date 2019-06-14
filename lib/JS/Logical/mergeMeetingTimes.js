// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting.In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime.These integers represent the number of 30 - minute blocks past 9: 00am.

// For example:

// { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// IOCE
// I =>   [{ startTime: 0, endTime: 1 },{ startTime: 3, endTime: 5 },{ startTime: 4, endTime: 8 },{ startTime: 10, endTime: 12 },{ startTime: 9, endTime: 10 },]
// O =>   [{ startTime: 0, endTime: 1 },{ startTime: 3, endTime: 8 },{ startTime: 9, endTime: 12 },]
// C => Do not assume the meetings are in order. The meeting times are coming from multiple teams. 
// C => the result of that merge may itself need to be merged into other meetings as well.
// E => The end time of the first meeting and the start time of the second meeting are equal. For example: [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]
// The second meeting ends before the first meeting ends.For example: [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]

// Check whether the input array is already sorted.
// Create a deep copy of the input array.
// Sort the input array of meetings by start time.
// Loop th' the sorted meeting and at each step:
// 1) we can merge the current meeting with the previous one as we go.
// 2) we cannot merge the current meeting with any further meetings and we throw that in the mergeMeetings array.

// O(nlogn) => Time, if already sorted then O(n) time. O(n) => Space.
function mergeMeetingTimes(inputArray){
    const meetings = JSON.parse(JSON.stringify(inputArray));

    
    
    // O(nlogn) in worst case
    const sortedMeetings = meetings.sort((a,b) => (
        a.startTime - b.startTime
        ));
        
        console.log(sortedMeetings);
    let mergedMeetings = [sortedMeetings[0]];

    // O(n)
    for(let i=1; i<sortedMeetings.length; i++){
        let currentMeeting = sortedMeetings[i];
        let lastMeeting = mergedMeetings[mergedMeetings.length - 1];

        if (currentMeeting.startTime <= lastMeeting.endTime){
            lastMeeting.endTime = Math.max(currentMeeting.endTime, lastMeeting.endTime);
        }else {
            mergedMeetings.push(currentMeeting);
        }
    }
    
    console.log(mergedMeetings);
    
    return mergedMeetings;
}


// test
let inputArray = [{ startTime: 0, endTime: 1 }, { startTime: 3, endTime: 5 }, { startTime: 4, endTime: 8 }, { startTime: 10, endTime: 12 }, { startTime: 9, endTime: 10 },]
console.log(`mergeMeetingTimes(inputArray) => ${mergeMeetingTimes(inputArray)}`);

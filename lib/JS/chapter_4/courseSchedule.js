// There are a total of n courses you have to take, labeled from 0 to n-1.Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0, 1]
// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses ?
// Example 1:

// Input: 2, [[1, 0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
//     Example 2:

// Input: 2, [[1, 0], [0, 1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should
// also have finished course 1. So it is impossible.

// O(C + P)

function courseSchedule(noOfCourses, prerequisites){
    let result = [];
    let course = prerequisites.slice();

    let flatten = function(course){
        return course.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    };

    courses = [...new Set(flatten(course))];

    let c = courses.slice();

    // console.log(courses);
    
    

    while(true){
        let pairs = [];
        let courseRemoved = false;

        for(let i=0; i< courses.length; i++){
            let v = courses[i];
            let requisite = prerequisites.findIndex( v1=> v1[1] === v);

            if(requisite === -1){
                result.push(v);
                courseRemoved = true;

                prerequisites.forEach(v1 => {
                    if(v1[0] != v){
                        pairs.push(v1);
                    }
                });

                courses.splice(i, 1);
                break;
            }

        }

        if(courses.length === 0 || !courseRemoved) break;
        prerequisites = pairs;
    }

    return (courses.length === 0 ? (result.length === c.length ? true : false) : false)
}


// test
let courses = 6;
let prerequisites = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
console.log(courseSchedule(courses, prerequisites));

courses = 2;
prerequisites = [[1, 0], [0, 1]];
console.log(courseSchedule(courses, prerequisites));

courses = 2;
prerequisites = [[1, 0]];
console.log(courseSchedule(courses, prerequisites));



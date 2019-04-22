// Given a set of points in the xy - plane, determine the minimum area of a rectangle formed from these points, with sides parallel to the x and y axes.
// If there isn't any rectangle, return 0.

// Example 1:
// Input: [[1, 1], [1, 3], [3, 1], [3, 3], [2, 2]]
// Output: 4

// Example 2:
// Input: [[1, 1], [1, 3], [3, 1], [3, 3], [4, 1], [4, 3]]
// Output: 2

// Note:
// 1 <= points.length <= 500
// 0 <= points[i][0] <= 40000
// 0 <= points[i][1] <= 40000
// All points are distinct.

// check if the points are empty, if return null;
// Find either the max width or length.
// Initialize an empty matrix with empty array as values for max width times.
// Insert value true to the matrix for all the points using for loop.
// check for min area as follows;
// Find the co-ordinates, x1, y1  and x2, y2
// if x1==x2 or y1==y2, continue;
// else check to see if the matrix with co-ordinates x1y2 and x2y1 are true
// if yes, find the diff for x and y
// calculate the max using infinity as the max value if there is no value for first time.
// return the max;


function minimumAreaRectangle(points){
    if (!points) return null;

    let max = 0;

    for(let i=0; i<points.length; i++){
        max = Math.max(points[i][0], max);
    }

    console.log(max);
    

    let matrix = [];
    
    for(let i=0; i<= max; i++){
        matrix[i] = [];
    }

    console.log(matrix);
    

    for(let i=0; i< points.length; i++){
        let x = points[i][0];
        let y = points[i][1];
        matrix[x][y] = true;
    }

    console.log(matrix);
    

    let minArea = Number.MAX_VALUE;

    for(let i=0; i< points.length; i++){
        let x1 = points[i][0];
        let y1 = points[i][1];
        for(let j=i+1; j< points.length; j++){
            let x2 = points[j][0];
            let y2 = points[j][1];

            if(x1 === x2 || y1 === y2) continue;
            if(matrix[x1][y2] && matrix[x2][y2]){
                let area = Math.abs(x1-x2) *  Math.abs(y1-y2);
                minArea = Math.min(minArea, area);
            }
        }
    }

    return minArea;
}


// test
let points = [[1, 1], [1, 3], [3, 1], [3, 3], [2, 2]];
console.log(minimumAreaRectangle(points));

// points = [[1, 1], [1, 3], [3, 1], [3, 3], [4, 1], [4, 3]];
// console.log(minimumAreaRectangle(points));

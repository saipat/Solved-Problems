// Given an m x n matrix of non - negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

// Water can only flow in four directions(up, down, left, or right) from a cell to another one with height equal or lower.

// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

//     Note:
// The order of returned grid coordinates does not matter.
// Both m and n are less than 150.
// Example:

// Given the following 5x5 matrix:

// Pacific ~   ~   ~   ~   ~
//     ~1    2   2   3  (5) *
//     ~3    2   3  (4) (4) *
//     ~2    4  (5)  3   1  *
//     ~(6)  (7)  1  4   5  *
//     ~(5)  1   1   2   4  *
//     *     *   *   *      * Atlantic

// Return:

// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]](positions with parentheses in above matrix).


// Approach => bfs and Queue
// initialize result array
// Iterate th' the array and do a bfs then push the co-ordinates to the array.
// inside bfs, initialize the queue and a hash/Set to mark the co-ordinates visited as we go.
// Iterate th' the Queue and shift the co-ordinates from the queue.
// Check for Pacific and atlantic visited.
// Find the adjacency list for neighbours.
// Check if a neighbour is visited. if yes, continue;
// Check for bounds and check the constraints given.
// if everything is good, add it to the visited hash and push it to the queue.
// return the result.


function waterFlow(grid){
    if (!grid) return null;

    let result = [];

    grid.forEach( (row, rowIdx) => {
        row.forEach((el, colIdx) => {
            if(bfs(grid, rowIdx, colIdx)){
                result.push([rowIdx, colIdx]);
            }
        })
    });

    return result;
}

function bfs(grid, rowIdx, colIdx){
    const queue = [ {row: rowIdx, col: colIdx}];
    const visited = new Set([rowIdx + ',' + colIdx]);

    let pacificVisited = false;
    let atlanticVisited = false;

    while(queue.length){
        const {row, col} = queue.shift();

        if (row === 0 || col === 0){
            pacificVisited = true;
        }

        if (row === grid.length-1 || col === grid.length-1){
            atlanticVisited = true;
        }

        const neighbours = [[row+1, col], [row-1, col], [row, col+1], [row, col-1]];

        for(let neighbour of neighbours){
            const nRow = neighbour[0], nCol = neighbour[1];
            const coord = nRow + ',' + nCol;

            if(visited.has(coord)) continue;

            if(inBounds(grid, nRow, nCol) && grid[row][col] >= grid[nRow][nCol]){
                visited.add(coord);
                queue.push({row:nRow, col:nCol});
            }
        }
    }

    return pacificVisited && atlanticVisited;
}

function inBounds(grid, nRow, nCol){
    return nRow >= 0 && nRow < grid.length && nCol >= 0 && nCol < grid[0].length;
}


// test
let grid = [[1,2,2,3,5], [3,2,3,4,4], [2,4,5,3,1], [6,7,1,4,5], [5,1,1,2,4]];
console.log(waterFlow(grid));

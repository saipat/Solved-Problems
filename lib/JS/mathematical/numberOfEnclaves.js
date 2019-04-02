// Given a 2D array A, each cell is 0(representing sea) or 1(representing land)
// A move consists of walking from one land square 4 - directionally to another land square, or off the boundary of the grid.
// Return the number of land squares in the grid for which we cannot walk off the boundary of the grid in any number of moves.

// Example 1:
// Input: [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
// Output: 3
// Explanation:
// There are three 1s that are enclosed by 0s, and one 1 that isn't enclosed because its on the boundary.

// Example 2:
// Input: [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]
// Output: 0
// Explanation:
// All 1s are either on the boundary or can reach the boundary.


//     Note:
// 1 <= A.length <= 500
// 1 <= A[i].length <= 500
// 0 <= A[i][j] <= 1
// All rows have the same size.


function numberOfEnclaves(grid){
    if(!grid) return null;

    let m = grid.length;
    let n = grid[0].length;

    let count = 0;

    for(let i=0; i<m; i++){
        dfs(i, 0);
        dfs(i, n-1);
    }

    for(let j=0; j<n; j++){
        dfs(0, j);
        dfs(m-1, j)
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            count += grid[i][j];
        }
    }

    return count;
}

function feasible(i, j, m, n){
    return  i >= 0 && i < m && j >=0 && j < n
}

function dfs(i, j){
    if(!grid[i][j]) return;

    grid[i][j] = 0;

    const directions = [[1,0], [-1, 0], [0,1], [0, -1]]

    for (const [di, dj] of directions){
        let newI = i + di;
        let newJ = j + dj;

        if(feasible(newI, newJ)) {
            dfs(newI, newJ);
        }
    }
}



// test
let grid = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]

console.log(numberOfEnclaves(grid));

grid = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]];

console.log(numberOfEnclaves(grid));
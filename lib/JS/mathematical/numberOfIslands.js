// Given a 2d grid map of '1's(land) and '0's(water), count the number of islands.An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all four edges of the grid are all surrounded by water.

//     Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

// Time => ?
function numberOfIslands(grid){
    if(!grid) return null;

    let count = 0;

    for(let x=0; x<grid.length; x++){
        for(let y=0; y<grid[0].length; y++){
            if(grid[x][y] === 1){
                count ++;
                dfs(x, y, grid);
            }
        }
    }

    return count;
}

// dfs: visited->-1, water->0, land->1
function dfs(x, y, grid){
    if(x < 0 || x>=grid.length || y<0 || y>=grid.length || grid[x][y] === -1 || grid[x][y] === 0) return;

    let xDelta = [1, -1, 0, 0];
    let yDelta = [0, 0, 1, -1];

    // mark the visited as -1;
    grid[x][y] = -1;

    for(let i=0; i< grid.length; i++){
        dfs(x + xDelta[i], y + yDelta[i], grid);
    }
}

// test
let grid = [ [1, 1, 1, 1, 0],
             [1, 1, 0, 1, 0],
             [1, 1, 0, 0, 0],
             [0, 0, 0, 0, 0]]

console.log(numberOfIslands(grid));

grid = [[1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1]]

console.log(numberOfIslands(grid));

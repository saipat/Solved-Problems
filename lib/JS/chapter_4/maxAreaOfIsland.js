// Given a non - empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4 - directionally.
//     Example 2:

// [[0, 0, 0, 0, 0, 0, 0, 0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.


// IOCE
// I => grid.
// O => max area of the island.
// C => 
// E => if there are no island then the max area is 0, empty grid

// Use dfs to solve this
// check for empty grid. if yes, return 0.
// have max var = 0
// iterate th'the  gid using 2 for loops
// if grid(i,j) === 1, then find the max value using dfs
// To find the area:
// Check bounds -> check if the indices is not less than 0 and greater than grid.length. if yes, return 0
// if the element at that position is 0 then return 0
// else set the element at that index 0; ie:visited.
// return 1 along with the dfs of +1 and -1 indices  - so basically each time find the dfs of the area next to it so that we can get the max.
// return max in the main function.


function maxAreaOfIsland(grid){
    let max = 0;
    for(let i=0; i< grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === 1){
                max = Math.max(max, dfs(i, j, grid));
            }
        }
    }
    return max;
}

function dfs(i, j, grid){
    if (i<0 || j<0 || i>=grid.length || j>=grid[i].length) return 0;
    if ((grid[i][j] === 0)) return  0;

    grid[i][j] = 0;

    return 1 + dfs(i - 1, j, grid) + dfs(i + 1, j, grid) + dfs(i, j - 1, grid) + dfs(i, j+1, grid);
}




// test
let grid =  [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]

console.log(maxAreaOfIsland(grid));
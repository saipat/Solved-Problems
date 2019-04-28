// Given an integer matrix, find the length of the longest increasing path.

// From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

// Example 1:

// Input: nums = 
// [
//   [9,9,4],
//   [6,6,8],
//   [2,1,1]
// ] 
// Output: 4 
// Explanation: The longest increasing path is [1, 2, 6, 9].
// Example 2:

// Input: nums = 
// [
//   [3,4,5],
//   [3,2,6],
//   [2,2,1]
// ] 
// Output: 4 
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.


function longestIncreasingPath(matrix){
    let max = 0;
    let visited = [];

    for(let i=0; i<matrix.length; i++){
        visited.push(new Array(matrix[0].length).fill(0));
    }

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            max = Math.max(max, dfs(matrix, i, j, visited));
        }
    }

    return max;
}

function dfs(matrix, i, j, visited){
    let length = 1;

    if(visited[i][j] != 0){
        return visited[i][j];
    }

    let dx = [0, 1, -1, 0]
    let dy = [1, 0, 0, -1]

    for(let k=0; k<4; k++){
        let x = i + dx[k];
        let y = j + dy[k];
        if(x >= 0 && x < matrix.length && y >= 0 && y<matrix[0].length && matrix[i][j] < matrix[x][y]){
            length = Math.max(length, dfs(matrix, x, y, visited) + 1)
        }
    }

    visited[i][j] = length;

    return length;
}




// test
let matrix =
	[
	  [3,4,5],
	  [3,2,6],
	  [2,2,1]
	]
	console.log(longestIncreasingPath(matrix));

    matrix = [
		  [3,4,5],
		  [3,2,6],
		  [2,2,1]
		] ;
		console.log(longestIncreasingPath(matrix));
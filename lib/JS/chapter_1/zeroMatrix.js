// #  *** Write an algorithm such that if an element in MxM matrix is 0, its entire row and column is set to zero.

// IOCE
// I => [[1,0,3],[2,4,5],[6,7,8]]
// O => [[0,0,0],[2,0,5],[6,0,8]]
// C =>
// E => empty matrix, 2 0's in row;

// if the matrix is empty, return [].
// create row and col to hold the array with false as value.
// nested loop th' the entire array to find the 0's.
// if 0 is found, flip it to true.
// Nested loop thr' the array to flip back to 0
// return the result.

// O(n ^ 2)
function zero_matrix(matrix) {
    if (matrix.length === 0) return [];

    const row = Array(matrix.length).fill(false);

    const col = Array(matrix[0].length).fill(false);

    // console.log(row);
    // console.log(col);
    
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j< matrix[0].length; j++){
            if(matrix[i][j] === 0){
                row[i] = true;
                col[j] = true;
            }
        }
    }

    // console.log(row);
    // console.log(col);
    
    for(let i=0; i< row.length; i++){
        for(let j=0; j<col.length; j++){
            if(row[i] || col [j]){
                matrix[i][j] = 0
            }
        }
    }

    return matrix;

}


// test 
console.log(`zero_matrix([[1,0,3],[2,4,5],[6,7,8]]) => ${zero_matrix([[1, 0, 3], [2, 4, 5], [6, 7, 8]])}`);
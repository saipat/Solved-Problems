// *** Given an immage represented by NxN matrix, where each pixel in the image is 4 bytes, Write a method to rotate the image by 90 degrees.Can you do this in place ?

// IOCE
// I => [['a','b','c'],['d', 'e', 'f'],['g', 'h', 'i']]
// O => [['g','d','a'],['h', 'e', 'b'],['i', 'f', 'c']]

// C => Do it in-place.
// E => matrix with just one row, empty matrix.

// if the matric is empty, return [].
// if it has 1 row, return the row.
// Loop through the matrix and get the char at the first index of the first column and add it to the array.
// reverse the array and return.


// // O(n^2)
// function rotate_matrix(matrix) {
//     if (matrix.length <= 1) return matrix;

//     let result = [];

//     for(let i=0; i< matrix[0].length; i++){
//         let row = matrix.map( el => el[i]).reverse();
//         result.push(row);
//     }

//     return result;
// }


//first reverse the matrix
// loop thr' the matrix
// swap the symmetric matrix

// O(n^2)
function rotate_matrix(matrix){
    if (matrix.length <= 1) return matrix;

    matrix = matrix.reverse();
    
    for(let i=0; i<matrix.length; i++){
        for(let j = 0; j < i; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
}

// test
console.log(`rotate_matrix([['a','b','c'],['d', 'e', 'f'],['g', 'h', 'i']]) => ${rotate_matrix([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']])}`);
console.log(`rotate_matrix([['a','b','c']]) => ${rotate_matrix([['a', 'b', 'c']])}`);
console.log(`rotate_matrix([]) => ${rotate_matrix([])}`);

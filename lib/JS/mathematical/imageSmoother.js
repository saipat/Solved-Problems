// Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale(rounding down) of all the 8 surrounding cells and itself.If a cell has less than 8 surrounding cells, then use as many as you can.

// Example 1:
// Input:
// [[1, 1, 1],
// [1, 0, 1],
// [1, 1, 1]]
// Output:
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
// Explanation:
// For the point(0, 0), (0, 2), (2, 0), (2, 2): floor(3 / 4) = floor(0.75) = 0
// For the point(0, 1), (1, 0), (1, 2), (2, 1): floor(5 / 6) = floor(0.83333333) = 0
// For the point(1, 1): floor(8 / 9) = floor(0.88888889) = 0
// Note:
// The value in the given matrix is in the range of[0, 255].
// The length and width of the given matrix are in the range of[1, 150].

function imageSmoother(matrix){
    if (matrix.length === 0) return null;

    let r = matrix.length, c = matrix[0].length, result = Array(r);

    for(let i=0; i<r; i++){
        result[i] = [];
        for(let j=0; j<c; j++){
            result[i][j] = smoother(i,j, matrix);
        }
    }

    return result;
}

function smoother(a,b, matrix){
    let sum=0, count=0;

    for(let i=a-1; i<=a+1; i++){
        for(let j=b-1; j<=b+1; j++){
            if(matrix[i] && matrix[i][j] != null){
                sum += matrix[i][j];
                count ++;
            }
        }
    }

    return Math.floor(sum/count);
}


// test

matrix = [[1, 1, 1],[1, 0, 1],[1, 1, 1]]
console.log(`imageSmoother(matrix) => ${imageSmoother(matrix)}`);

matrix = [[20, 11, 1],[1, 0, 1],[33, 55, 130]]
console.log(`imageSmoother(matrix) => ${imageSmoother(matrix)}`);


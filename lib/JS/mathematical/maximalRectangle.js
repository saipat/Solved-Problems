// Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Example:

// Input:
// [
//     ["1", "0", "1", "0", "0"],
//     ["1", "0", "1", "1", "1"],
//     ["1", "1", "1", "1", "1"],
//     ["1", "0", "0", "1", "0"]
// ]
// Output: 6


function maximalRectangle(matrix){
    if(matrix.length === 0) return 0;

    const n = matrix.length, m = matrix[0].length;
    const h = new Array(n).fill(0);
    let max = 0;

    for(let j=0; j<m; j++){
        for(let i=0; i<n;i++){
            if(matrix[i][j] === '1') h[i]++;
            else h[i] = 0;
        }

        for(let i=0; i<n; i++){
            let k1 = i - 1;
            while(k1 >= 0 && h[i] <= h[k1]) k1--;
            let k2 = i + 1;
            while(k2 < n && h[i] <= h[k2]) k2++;
            max = Math.max(max, h[i] * (k2-k1-1));
        }
    }

    return max;
}




matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]

console.log(maximalRectangle(matrix));

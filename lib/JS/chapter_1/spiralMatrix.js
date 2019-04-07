// Given a matrix of m x n elements(m rows, n columns), return all elements of the matrix in spiral order.

const spiralMatrix = matrix => {
    if (matrix.length === 0) return []

    m = matrix.slice(0)
    result = []

    while(m.length > 0){
        result.push(m.shift())
        if(m.length === 0) break;
        result.push(m.map( el => el.pop()))
        result.push((m.pop() || []).reverse())
        result.push(m.map( el => el.shift()).reverse())
    }

    return result

}

// testing

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(`Spiral matrix for ${matrix}: ${spiralMatrix(matrix)}`);

matrix = []
console.log(`Spiral matrix for ${matrix}: ${spiralMatrix(matrix)}`);

matrix = [[6, 9, 7]]
console.log(`Spiral matrix for ${matrix}: ${spiralMatrix(matrix)}`);
// You are asked to cut off trees in a forest for a golf event.The forest is represented as a non - negative 2D map, in this map:

// 0 represents the obstacle can't be reached.
// 1 represents the ground can be walked through.
// The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.


// You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. And after cutting, the original place has the tree will become a grass (value 1).

// You will start from the point(0, 0) and you should output the minimum steps you need to walk to cut off all the trees.If you can't cut off all the trees, output -1 in that situation.

// You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.

//     Example 1:

// Input:
// [
//     [1, 2, 3],
//     [0, 0, 4],
//     [7, 6, 5]
// ]
// Output: 6


// Example 2:

// Input:
// [
//     [1, 2, 3],
//     [0, 0, 0],
//     [7, 6, 5]
// ]
// Output: -1


// Example 3:

// Input:
// [
//     [2, 3, 4],
//     [0, 0, 5],
//     [8, 7, 6]
// ]
// Output: 6
// Explanation: You started from the point(0, 0) and you can cut off the tree in (0, 0) directly without walking.


const cutOffTree = forest => {
    if(!forest.length) return 0;

    let m = forest.length;
    let n = forest[0].length;

    let trees = getTrees(forest, m, n);

    let steps = 0;
    let position = [0,0];

    while(trees.length){
        const distance = [...new Array(m)].map(() => new Array(n).fill(Infinity));
        const [dest] = trees.shift();
        const[i,j] = dest;

        bfs(forest, m, n, position, distance);

        if(distance[i][j] >= Infinity) return -1;

        steps += distance[i][j];
        position = dest;
    }

    return steps;
}

const getTrees = (forest, m, n) => {
    const trees = [];

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(forest[i][j] > 1){
                trees.push([[i,j], forest[i][j]]);
            }
        }
    }

    return trees.sort((a,b) => a[1]-b[1]);
};

const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];

const bfs = (forest, m, n, position, distance) => {
    distance[position[0]][position[1]] = 0;

    const queue = [[position, 0]];

    while(queue.length) {
        const [[x,y], d] = queue.shift();

        for(let [di, dj] of dirs){
            let i = x + di;
            let j = y + dj;

            if(isValid(i, j, m, n) && forest[i][j] > 0 && (d+1) < distance[i][j]){
                distance[i][j] = d + 1;
                queue.push([[i,j], d+1]);
            }
        } 
    }
};

const isValid = (i, j, m, n) => {
    return (i<0 || i>=m || j<0 || j>=n) ? false : true
};


// test
let input = [
     [1, 2, 3],
     [0, 0, 4],
     [7, 6, 5]
 ]
console.log(cutOffTree(input));

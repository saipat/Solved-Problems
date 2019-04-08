// Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number(floating point number).Given some queries, return the answers.If the answer does not exist, return -1.0.

//     Example:
// Given a / b = 2.0, b / c = 3.0.
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
// return [6.0, 0.5, -1.0, 1.0, -1.0].

// The input is: vector < pair < string, string >> equations, vector<double>& values, vector < pair < string, string >> queries, where equations.size() == values.size(), and the values are positive.This represents the equations.Return vector<double>.

//     According to the example above:

//     equations = [["a", "b"], ["b", "c"]],
//     values = [2.0, 3.0],
//     queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]. 
// The input is always valid.You may assume that evaluating the queries will result in no division by zero and there is no contradiction.


// Use hash to store the adjacency lists.
// Initialize the adjacency list.
// Create the adjacency list.
// Evaluate the queries using helper method.
// Add the children of the expression that we are currently on, keep evaluating it until, we run out.

function calcEquation(equations, values, queries){
    let neighbours = {};

    // Initialize the adjacency list => { a: [], b: [], c: [] }
    for(let i=0; i<equations.length; i++){
        neighbours[equations[i][0]] = [];
        neighbours[equations[i][1]] = [];
    }

    for(let i=0; i<equations.length; i++){
        neighbours[equations[i][0]].push([equations[i][1], values[i]]);
        neighbours[equations[i][1]].push([equations[i][0], 1/values[i]]);
    }
    // console.log(neighbours);
    
    let result = []
    for(let q of queries){
        result.push(evaluateExp(q, neighbours))
    }

    // console.log(result);
    
    return result;
}

function evaluateExp(exp, neighboursList){
    
    if(!(exp[0] in neighboursList) || !(exp[1] in neighboursList)) return -1;
    if(exp[0] === exp[1]) return 1;

    // Initialize a queue to start with.
    let q = neighboursList[exp[0]].slice();
    let checked = [];

    while(q.length > 0){
        let el = q.shift();
        
        // check if the element is a part of the expression. if it is, then return
        if(el[0] === exp[1]) return el[1];

        checked.push(el[0]);

        // otherwise push the neighbours to q with the updated values;
        var neighbours = neighboursList[el[0]];
        for(let n = 0; n < neighbours.length; n++) {
            let nextElToCheck = neighbours[n];
            
            if(checked.includes(nextElToCheck[0])) continue;
            q.push([nextElToCheck[0], nextElToCheck[1]*el[1]]);
        }
    }

    // If there is no answer, return -1;
    return -1;
}


// test
let equations = [["a", "b"], ["b", "c"]];
let values = [2.0, 3.0];
let queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]];

console.log(calcEquation(equations, values, queries));

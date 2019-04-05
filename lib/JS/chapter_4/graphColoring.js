// Given an undirected graph ↴ with maximum degree ↴ D, find a graph coloring ↴ using at most D + 1D + 1 colors.
// Degree is the number of nodes connected to that node.
// for ex if a graph's maximum degree (D) is 3, so we have 4 colors (D+1). 

// write a graph class first with labels, neighbours and colors.
// Iterate th' each node in the graph and find if that'a its own neighbour.
// if yes throw an error as we can't have legal coloring for loops.
// Find the nodes neighbours and put it in a set of illegal colors for that node.
// iterate th' the colors and find the color is not in the set of illegal colors.
// if it is not, then assign that color to that node.
// break and return the graph.



class Graph{
    constructor(label){
        this.label = label;
        this.neighbours = new Set();
        this.color = null;
    }
}

// Time =>  O(N + M)where NN is the number of nodes and MM is the number of edges.
// Spcae=> O(D) where D is the number of illegal colors  in the set.
function legalColoring(graph, colors){
    graph.forEach( node => {
        if(node.neighbours.has(node)){
            throw new Error('Graph with loops can\'t have Legal coloring');
        }

        const illegalColors = new Set();

        node.neighbours.forEach(neighbour => {
            if(neighbour.color != null){
                illegalColors.add(neighbour.color);
            }
        })

        for(let i=0; i< colors.length; i++){
            if(!illegalColors.has(colors[i])){
                node.color = colors[i];
                break;
            }
        }
    });

    return graph;
}


// test

let graph = [];
{
const a = new Graph('A');
const b = new Graph('B');
const c = new Graph('C');
const d = new Graph('D');
const e = new Graph('E');

a.neighbours.add(b);
b.neighbours.add(a);
b.neighbours.add(c);
c.neighbours.add(b);
d.neighbours.add(a);
d.neighbours.add(e);
c.neighbours.add(e);
e.neighbours.add(c);
e.neighbours.add(d);

graph = [a, b, c, d, e]
}

const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];

console.log(legalColoring(graph, colors));

// Implement Graph

class Graph {
	constructor(noOfVertices) {
		this.noOfVertices = noOfVertices;
		this.adjacencyList = new Map();
	}

	// initialize the adjacent list with a null array
	addVertex(v) {
		this.adjacencyList.set(v, []);
		return this;
	}

	// get the list for vertex v and put the vertex w denoting edge betweeen v and w
	addEdge(v, w) {
		this.adjacencyList.get(v).push(w);
		this.adjacencyList.get(w).push(v);
	}

    // get all the vertices
    // iterate over the vertices 
	printGraph() {
        let vertices = this.adjacencyList.keys();

        // console.log(vertices);
        
        for(let i of vertices){
            let values = this.adjacencyList.get(i);
            let current = '';
            
            for(let j of values){
                current += j + " ";
            }

            console.log(i+ '->' + current);
        }
    }

    // dfs
    dfs(startingVertex){
        let visited = [];
        for(let i=0; i< this.noOfVertices; i++){
            visited[i] = false;
        }

        this.dfsUtil(startingVertex, visited);

        return visited;
    }

    dfsUtil(startingVertex, visited){
        visited[startingVertex] = true;

        let neighbours = this.adjacencyList.get(startingVertex);

        // console.log(neighbours);
        
        for(let i in neighbours){
            let element = neighbours[i];
            if(!visited[element]){
                this.dfsUtil(element, visited);
            }
        }

        return visited;
    }

    
}


// test
const graph = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F']; 
// adding vertices 
for (var i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
} 

// console.log(graph);
// adding edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F'); 
console.log(graph);

console.log('Graph Printing');
console.log(graph.printGraph());



// dfs
console.log(graph.dfs('A'));



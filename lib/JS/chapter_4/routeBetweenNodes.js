// Given a directed graph, design an algorithm to find out whether there is a route between 2 nodes.

// I => node1, node2
// O => array[]
// bfs => queue

// Check if node1 === node2
// First add the node to the Q
// Do the below steps while the Q length is > 0
// Shift it off of the Q
// Mark it as visited
// iterate th’ all the children
// If I visit the node, put it in the visited array
// Check if we reached the node 2. If yes return true.
// Else add it to the Q

// In the end return false.


class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }

    addChild(value){
        this.children.push(new Node(value));
        return this;
    }
}

function routesBetween2Nodes(node1, node2) {

    if (node1 === node2) return true;
    // console.log(node1);
    // console.log(node2);
    

    let queue = [node1];
    let visited = new Set();

    while(queue.length > 0){
        let node = queue.shift();
        if(!node) return false;
        visited.add(node.value);
        // console.log(visited);
        
       for(const child of node.children){
           
           if(child.value === node2.value){
               visited.add(child.value);
               return true;
           }else{
               queue.push(child);
           }
       }
    }

    return false;
}

// test 
const root = new Node("A")
// console.log(root)
root.addChild('B');
root.addChild('D')
// console.log(root);
root.children[0].addChild('C').addChild('E');
root.children[1].addChild('F');
// console.log(root.bfs(root));

console.log(routesBetween2Nodes(root.children[1].children[0], root.children[0].children[1]));
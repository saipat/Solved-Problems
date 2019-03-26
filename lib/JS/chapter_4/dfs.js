// Implement a dfs.



class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }

    addChild(value){
        this.children.push(new Node(value));
        return this;
    }

    // Time => O(E+V) & Space => O(V)
    // dfs(array){
    //     array.push(this.value);
        
    //     for( const child of this.children){
    //         child.dfs(array);
    //     }
    //     return array;
    // }

    // recursive
    // dfs(node, visited = new Set()){
    //     if(visited.has(node.value)) return visited;

    //     visited.add(node.value);

    //     node.children.forEach(child => {
    //         this.dfs(child, visited)
    //     })

    //     return visited;
    // }

    // iterative - use stack to keep track of the node
    // initialize a stack witht he given node.
    // we can use a set to keep track of the visited.
    // while there is an item in the stack, pop it off and sore the value as node.
    // check if that node is already visited. if yes, return.
    // mark it as visited by addind it to the set.
    // find its children and push it into the stack.
    // return visited.

    dfs(node){
        let stack = [node];
        let visited = new Set();

        while (stack.length){
            let node = stack.pop();

            // console.log(node);
            
            if(visited.has(node.value)) continue ;

            visited.add(node.value);
            stack.push(...node.children);
        }

        return visited;
    }

}



// test 
const root = new Node("A")
// console.log(root)
root.addChild('B');
root.addChild('C')
// console.log(root);
root.children[0].addChild('D').addChild('F');
root.children[1].addChild('E')
// console.log(root);
console.log(root.dfs(root));

// root.dfs([]);
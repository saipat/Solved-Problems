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
    dfs(node, visited = new Set()){
        if(visited.has(node.value)) return visited;

        visited.add(node.value);

        node.children.forEach(child => {
            this.dfs(child, visited)
        })

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
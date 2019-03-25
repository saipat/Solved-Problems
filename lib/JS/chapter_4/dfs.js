// Implement a dfs.



class Node{
    constructor(name){
        this.name = name;
        this.children = [];
    }

    addChild(name){
        this.children.push(new Node(name));
        return this;
    }

    // Time => O(E+V) & Space => O(V)
    dfs(array){
        array.push(this.name);
        
        for( const child of this.children){
            child.dfs(array);
        }
        return array;
    }
}



// test 
const root = new Node("A")
console.log(root)
root.addChild('B');
root.addChild('C')
console.log(root);
root.children[0].addChild('D').addChild('F');
root.children[1].addChild('E')
console.log(root);
console.log(root.dfs([]));

// root.dfs([]);
class Graph {
    constructor(label) {
        this.label = label;
        this.neighbours = new Set();
    }
}

function remoteCities(graph){
    let find = [];
    let result = {};
    graph.forEach(node => {
        let isCycle = false;
        
        node.neighbours.forEach(neighbour => {
            
            if(neighbour.neighbours.has(node)){
                isCycle = true;
            }else{
                find.push(neighbour);
            }
        })
    })
    console.log(find);
    let count = 1;
    find.forEach(n => {
       if(n.neighbours){
           console.log(n.neighbours);
           
       }
       console.log(result);
       
    })


}


let graph = [];
{
    const a = new Graph(1);
    const b = new Graph(2);
    const c = new Graph(3);
    const d = new Graph(4);
    const e = new Graph(5);
    const f = new Graph(6);
    
    a.neighbours.add(b);
    a.neighbours.add(c);
    b.neighbours.add(a);
    b.neighbours.add(c);
    c.neighbours.add(b);
    c.neighbours.add(a);
    c.neighbours.add(d);
    c.neighbours.add(e);
    d.neighbours.add(f);
    
    graph = [a, b, c, d, e, f]
}
remoteCities(graph)
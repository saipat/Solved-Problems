// Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is dependent on the first project). All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.

// EXAMPLE
// Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: f, e, a, b, d, c

// The list of dependencies represent the direct edges between nodes that represent the projects.
// We need to perform Topological sort.
// As we iterate th' the projects, we need to keep track of the new dependencies and the projects that we have removed.
// First take a project and Find its index in the dependencie's second index.
// if it is not there, ie, index === -1, we push that project into the result array and mark it as removed from projects.
// for each dependencies, select only those that does not have the removed project as its first index.
// splice it off of the prject and break from for loop.
// if either the project lenght is 0 or if the proj is not removed, break out off the while loop;
// else make your new dependencies as the dependencies and continue the process.
// if the projects .length is 0, return the resulr else null;

// O(P+D)
function buildOrder(projects, dependencies){
    let result = [];

    while(true){
        let newDependencies = [];
        let projectRemoved = false;

        for(let i=0; i<projects.length; i++){
            let v = projects[i];
            let dependent = dependencies.findIndex(v1 => v1[1] === v);
            // console.log(dependent);
            
            if(dependent === -1){
                result.push(v);
                projectRemoved = true;

                dependencies.forEach( v1 => {
                    if(v1[0] != v){
                        newDependencies.push(v1);
                    }
                });

                projects.splice(i,1);
                break;
            }
        }

        if(projects.length === 0 || !projectRemoved) break;
        dependencies = newDependencies;
    }

    return projects.length === 0 ? result : null;
}



let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
let dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
console.log(buildOrder(projects, dependencies));

projects = [1, 2, 3, 4]
dependencies = [[1, 2], [1, 3], [3, 2], [4, 2], [4, 3]];
console.log(buildOrder(projects, dependencies));
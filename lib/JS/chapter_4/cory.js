// You are given a list of arbitrary jobs that need to be completed; these jobs are represented by integers.You are also given a list of dependencies.A dependency is represented as a pair of jobs where the first job is prerequisite of the second one.In other words, the second job depends on the first one; it can only be completed once the first job is completed.Write a function that takes in a list of jobs and a list of dependencies and returns a list containing a valid order in which the given jobs can be completed.If no such order exists, the function should return an empty list.

// Sample input: [1, 2, 3, 4], [[1, 2], [1, 3], [3, 2], [4, 2], [4, 3]]
// Sample output: [1, 4, 3, 2] or[4, 1, 3, 2]

// //IOCE
// //I= >[1, 2, 3, 4], [[1, 2], [1, 3], [3, 2], [4, 2], [4, 3]]
// // O=>  [1, 4, 3, 2] or [4, 1, 3, 2]

// [[1, 2], [1, 3], [3, 2], [4, 2], [4, 3]] = > 2 =[1, 3, 4] & 3 =[1, 4] => [1, 4, 3]

// Dfs with stack

// function installOrder(jobs, dependencies) {
//     Let result = [];
//     for (let i = 0; i < dependencies.length; i++) {
//         let job = dependencies.shift();

//     }
// }

// // O(j + d) time | O(j + d) space
// function topologicalSort(jobs, deps) {
//     const jobGraph = createJobGraph(jobs, deps);
//     return getOrderedJobs(jobGraph);
// }

// function createJobGraph(jobs, deps) {
//     const graph = new JobGraph(jobs);
//     for (const [prereq, job] of deps) {
//         graph.addPrereq(job, prereq);
//     }
//     return graph;
// }

// function getOrderedJobs(graph) {
//     const orderedJobs = [];
//     const { nodes } = graph;
//     while (nodes.length) {
//         const node = nodes.pop();
//         const containsCycle = depthFirstTraverse(node, orderedJobs);
//         if (containsCycle) return [];
//     }
//     return orderedJobs;
// }

// function depthFirstTraverse(node, orderedJobs) {
//     if (node.visited) return false;
//     if (node.visiting) return true;
//     node.visiting = true;
//     for (const prereqNode of node.prereqs) {
//         const containsCycle = depthFirstTraverse(prereqNode, orderedJobs);
//         if (containsCycle) return true;
//     }
//     node.visited = true;
//     node.visiting = false;
//     orderedJobs.push(node.job);
//     return false
// }

// class JobGraph {
//     constructor(jobs) {
//         this.nodes = [];
//         this.graph = {};
//         for (const job of jobs) {
//             this.addNode(job);
//         }
//     }
//     addPrereq(job, prereq) {
//         const jobNode = this.getNode(job);
//         const prereqNode = this.getNode(prereq);
//         jobNode.prereqs.push(prereqNode);
//     }

//     addNode(job) {
//         this.graph[job] = new JobNode(job);
//         this.nodes.push(this.graph[job]);
//     }

//     getNode(job) {
//         if (!(job in this.graph)) this.addNode(job);
//         return this.graph[job];
//     }
// }

// class JobNode {
//     constructor(job) {
//         this.job = job;
//         this.prereqs = [];
//         this.visited = false;
//         this.visiting = false;
//     }
// }


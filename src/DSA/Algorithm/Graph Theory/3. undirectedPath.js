/**
 * Write a function, undirectedPath, that takes in an array of edges
 * for an undirected graph and two nodes (nodeA, nodeB). The function 
 * should return a boolean indicating whether or not there exists a path 
 * between nodeA and nodeB.
 */

// Here we have a connection between i and j for first item and also
// we can go from i to j and j to i 
// Usually we have cycle in undirected graph
// we have visited tag to avoid looping again and again in cycle 
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];
// steps => Convert array of edges into adjacent list
// Traverse the graph and mark poped nodes as visited 
// Once source and detsination is same, return  true 

const graph = {
    i: ['j', 'k'],
    j: ['i'],
    k: ['i', 'm', 'l'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o']
};

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const hasPathDFS = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;

    visited.add(src);
    for (let neighbor of graph[src]) {
        if (hasPathDFS(graph, neighbor, dst, visited)) {
            return true
        }
    }
    return false;
}

const undirectedPath = (edges, src, dst) => {

    const graph = buildGraph(edges);
    return hasPathDFS(graph, src, dst, new Set());
}



undirectedPath(edges, 'j', 'm');

// Time complexity - O (No of edges)
// Space complexity - O (No of nodes)
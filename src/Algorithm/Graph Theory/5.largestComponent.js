/**
 * Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
 * The function should return the size of the largest connected component in the graph.
 */

// Explore the node and return no of nodes
// Based on max of different connected component return the result

const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
};

const exploreSize = (graph, src, visited) => {
    if (visited.has(src)) return 0;
    visited.add(+src);

    let size = 1;

    for (let neighbor of graph[src]) {
        size += exploreSize(graph, neighbor, visited);
    }
    return size;
}


const largestComponent = (graph) => {
    let largest = 0;
    let visited = new Set();

    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        if (size > largest) {
            largest = size;
        }
    }

    return largest;
}


console.log(largestComponent(graph));
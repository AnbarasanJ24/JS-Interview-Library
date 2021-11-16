
/**
 * Write a function, connectedComponentsCount, that takes in the adjacency list
 * of an undirected graph.The function should return the number of connected
 * components within the graph.
 */

/**
 * Steps => Loop all the nodes and explore as much we can and mar the viisted node
 * once each node explored completely then increase the count
 */

const explore = (graph, src, visited) => {

    if (visited.has(src)) return false;
    visited.add(src);

    for (let neighbor of graph[src]) {
        explore(graph, neighbor, visited);
    }

    return true;
}

const connectedComponentsCount = (graph) => {
    let count = 0;
    const visited = new Set();

    for (let node in graph) {
        if (explore(graph, node, visited)) {
            count += 1;
        }
    }

    return count;
}



const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
};
connectedComponentsCount(graph); // -> 2

// Time complexity : O (No of edges)
// Space complexity : O (No of nodes)


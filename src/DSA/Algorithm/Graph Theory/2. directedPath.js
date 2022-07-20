/**
 * Write a function, hasPath, that takes in an object representing the 
 * adjacency list of a directed acyclic graph and two nodes (src, dst).
 * The function should return a boolean indicating whether or not there 
 * exists a directed path between the source and destination nodes.
 */

// Problem Notes : Both Source and dest should be same 

/**
 *  Time complexity 
 *  N = no of Nodes, e = No of edges
 *  T = O (e)
 *  S = O (n)
 *  We have one more possible solution to graph problem 
 *  N = no of nodes, N^2 = no of edges in worst case (Each node has two edges)
 *  Time = O (N^2)
 *  Space = O (N)
 */

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

const hasPathDFS = (graph, src, dst) => {
    if (src === dst) return true;

    // Check all the neigbour
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst)) {
            return true;
        }
    }
    return false;
}

const hasPathBFS = (graph, src, dst) => {
    const queue = [src];

    while (queue.length > 0) {
        const current = queue.shift();

        if (current === dst) return true;

        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }

    return false;
}

// hasPathDFS(graph, 'f', 'k'); 
const isPathExist = hasPathBFS(graph, 'f', 'k');
console.log(isPathExist);
/**
 * Write a function, shortestPath, that takes in an array of
 * edges for an undirected graph and two nodes(nodeA, nodeB).The
 * function should return the length of the shortest path between
 * A and B.Consider the length as the number of edges in the path,
 * not the number of nodes.If there is no path between A and B, then return -1.
 */
// Notes => Convert edges into adjaceny list, BFS is best for shortest path
// Implement BFS and store both node and distance in queue
// Traverse like normal BFS and once target is found return distance
const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

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

const shortestPath = (edges, src, dst) => {
    const graph = buildGraph(edges);
    const queue = [[src, 0]];

    const visited = new Set(src);

    while (queue.length > 0) {

        const [current, distance] = queue.shift();
        if (current === dst) return distance;

        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                queue.push([neighbor, distance + 1]);
                visited.add(neighbor);
            }
        }
    }
    return -1;
}
console.log(shortestPath(edges, 'w', 'z'))// -> 2

// Time : O (N) , Space : O (N)
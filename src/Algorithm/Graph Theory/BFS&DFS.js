// Both BFS and DFS uisng below Algorithm

// Step1 : Push Head 
// Step2 : Pop a element and add its neighbour
// Step3: Repeat 2 until stack is empty 


const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}


/**
 * Depth First Search 
*/


// Iterative approach
const depthFirstIterative = (graph, startingPoint) => {

    const stack = [startingPoint];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current)

        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }

}

// Recursive approach 
// Do whetever we do for one element to all the elements 

const depthFirstRecursive = (graph, startingPoint) => {
    console.log(startingPoint);
    for (let neighbor of graph[startingPoint]) {
        depthFirstRecursive(graph, neighbor);
    }
}



/**
 * Breadth First Search
*/

// Iterative approach
const breadthFirstIterative = (graph, startingPoint) => {
    const queue = [startingPoint];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);

        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}


// depthFirstIterative(graph, 'a');
// depthFirstRecursive(graph, 'a');
breadthFirstIterative(graph, 'a');
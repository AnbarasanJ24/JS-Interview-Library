/**
 * Write a function, islandCount, that takes in a grid containing Ws and Ls.
 *  W represents water and L represents land. The function should return the
 *  number of islands on the grid. An island is a vertically or horizontally
 *  connected region of land.
 */
// Nested Loops + DFS
const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

// Notes
// same like connected graph problem, here we iterate through grid
// Need to explore all grid items and on successful explore return true 
const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;

    for (let r = 0; r <= grid.length; r++) {
        for (let c = 0; c <= grid[0].length; c++) {
            if (explore(grid, r, c, visited)) {
                count += 1;
            }
        }
    }
    return count;
}

// Notes
// check row & col are inside the bounds
// Check current grid is land or water
// check current grid is visited or not
// Explore 4 direction and return  true
const explore = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid.length;
    if (!rowInbounds || !colInbounds) return false;

    if (grid[r][c] === 'W') return false;

    const pos = r + ',' + c;
    if (visited.has(pos)) return false;

    visited.add(pos);

    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
}

console.log(islandCount(grid));

// Time : O (row*col)
// Space : O (row*col)
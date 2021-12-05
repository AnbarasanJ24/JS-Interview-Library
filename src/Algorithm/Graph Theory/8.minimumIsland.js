/**
 * Write a function, islandCount, that takes in a grid containing Ws and Ls.
 *  W represents water and L represents land. The function should return the
 *  minimum size islands on the grid. An island is a vertically or horizontally
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
// Need to explore all grid items and on successful explore get the size back
// Maintain minimum size and compare with function returned value 
const minimumIsland = (grid) => {
    const visited = new Set();
    let min = Infinity;

    for (let r = 0; r <= grid.length; r++) {
        for (let c = 0; c <= grid[0].length; c++) {
            const islandSize = exploreSize(grid, r, c, visited);
            if (islandSize > 0 && islandSize < min) {
                min = islandSize
            }
        }
    }
    return min;
}

// Notes
// check row & col are inside the bounds
// Check current grid is land or water
// check current grid is visited or not
// Explore 4 direction and return  true
const exploreSize = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return 0;

    if (grid[r][c] === 'W') return 0;

    const pos = r + ',' + c;
    if (visited.has(pos)) return 0;

    visited.add(pos);
    let size = 1;
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c - 1, visited);
    size += exploreSize(grid, r, c + 1, visited);

    return size;
}

console.log(minimumIsland(grid));

// Time : O (row*col)
// Space : O (row*col)
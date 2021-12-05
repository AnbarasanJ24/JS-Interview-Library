/**
 * Given a Grid of m*n, It has start at left-top corner and end as right-bottom corner
 * Need to travel either in right or left direction to go from start to end
 * Find number of possible ways to reach start to end 
 */

// Notes => grid(1,1) always have 1 way
// No we have two posibility right and down, Add current to right and down 

const gridTraveler = (m, n) => {
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));

    table[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
        }
    }

    return table[m][n];
}



console.log(gridTraveler(3, 2))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(18, 18))

// Time complexity will be O (m*n) 
// Space complexity O (m*n) 
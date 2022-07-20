/**
 * Given a Grid of m*n, It has start at left-top corner and end as right-bottom corner
 * Need to travel either in right or left direction to go from start to end
 * Find number of possible ways to reach start to end 
 */

// Notes => grid(1,1) will always have 1 way (Already we have a way)
// If there is no row or no column then we can't travel , so m or n = 0 then way 0

const gridTraveler = (m, n) => {

    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

// Time Complexity O (2^ m+n) and space O(m+n)


const gridTravelerDP = (m, n, memo = {}) => {
    const key = m + ',' + n;

    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
}


console.log(gridTravelerDP(1, 1))
console.log(gridTravelerDP(2, 3))
console.log(gridTravelerDP(3, 2))
console.log(gridTravelerDP(18, 18))

// For gridTravelerDP(3, 2) => (m,n) => m will have (3,2,1,0) and n will have (2,1,0) possibility 
// Time complexity will be O (m+1 * n*1) => O (m*n)
// Space complexity O(m+n)
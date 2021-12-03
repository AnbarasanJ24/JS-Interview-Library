/**
 * Given a target sum and array of numbers. Check target sum can be achived using array of number even using multiple times
 * Array of number will not negative
 * Return the shortest sum from all the sum results. In case of tie in shortest sum we can return any one
 * targetsum = 7
 * numbers = [5,3,4,7]
 * o/p = 7
 */


const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainingSum = targetSum - num;
        const remainingCombination = bestSum(remainingSum, numbers);
        if (remainingCombination !== null) {
            const combination = [...remainingCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    return shortestCombination;
}
// Brute Force
// m = target sum , n = numbers length
// time: O (n ^m * m) same like howsum
// space : O (m*m) => O (m^2) Each stack needs to carry shortest combination

const bestSumDP = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainingSum = targetSum - num;
        const remainingCombination = bestSum(remainingSum, numbers, memo);
        if (remainingCombination !== null) {
            const combination = [...remainingCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return memo[targetSum];
}

// Memoized
// m = target sum , n = numbers length
// time: O (n * m^2) Run based on branch (numbers) for target sum, another m for copy the array 
// space : O (m*m) => O (m^2) Each stack needs to carry shortest combination


console.log(bestSum(8, [2, 3, 5]));
console.log(bestSumDP(50, [2, 3, 5, 25]));
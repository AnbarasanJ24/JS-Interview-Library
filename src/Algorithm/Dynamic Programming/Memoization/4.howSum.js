/**
 * Given a target sum and array of numbers. Check target sum can be achived using array of number even using multiple times
 * Array of number will not negative
 * Function should return any one combination and null if there is no combination
 * targetsum = 7
 * numbers = [5,3,4,7]
 */


const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainingSum = targetSum - num; //2
        const remainingResult = howSum(remainingSum, numbers);
        if (remainingResult !== null) {
            return [...remainingResult, num];
        }
    }
    return null;
}

// It will be identical of canSum, m= targetSum, n= numbers.length
// T = O (n ^ m * m) Need to copy elements to array for each call linearly
// S = O (m)


const howSumDP = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo;
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainingSum = targetSum - num; //2
        const remainingResult = howSum(remainingSum, numbers, memo);
        if (remainingResult !== null) {
            memo[targetSum] = [...remainingResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];
}

// T = O (n * m * m) => O (n*m^2) Need to copy elements to array for each call linearly
// S = O (m *m )= > O (m^2) memo will store array as values which is based on targetSum

console.log(howSumDP(8, [2, 3]))
console.log(howSumDP(7, [2, 4]))
console.log(howSum(300, [7, 14]))
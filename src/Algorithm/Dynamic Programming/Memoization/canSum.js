/**
 * Given a target sum and array of numbers. Check target sum can be achived using array of number even using multiple times
 * Array of number will not negative
 * Return true if its possible else false
 * targetsum = 7
 * numbers = [5,3,4,7]
 */



const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainingSum = targetSum - num;
        if (canSum(remainingSum, numbers)) {
            return true;
        }
    }

    return false;
}

// T = O (numbers ^ targetSum) targetsum is the height of the tree, based on target sum function calls are happening
// S = O (targetSum) , Height of the tree


const canSumDP = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]; // Since numbers are same, we can memo based on target sum
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainingSum = targetSum - num;
        if (canSum(remainingSum, numbers, memo)) {
            memo[targetSum] = true;
            return memo[targetSum];
        }
    }
    memo[targetSum] = false;
    return memo[targetSum];
}


console.log(canSumDP(7, [2, 3]))
console.log(canSumDP(7, []))
console.log(canSumDP(8, [2, 3, 5]))
console.log(canSumDP(300, [7, 14]))

// T = O(numbers * targetSum)
// S = O(targetSum)
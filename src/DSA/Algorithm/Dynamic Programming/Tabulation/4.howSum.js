/**
 * Given a target sum and array of numbers. Check target sum can be achived using array of number even using multiple times
 * Array of number will not negative
 * Function should return any one combination and null if there is no combination
 * targetsum = 7
 * numbers = [5,3,4,7]
 */

// Notes
// Its same like can sum, but here we need to return an array with one combination
// If making target sum from zero is possible means then it will
// possible to make target sum from current position (Zero) to other given positio
// Once iterate possible way, take current position value and add current contributing value 
// After first iteration, index 3 => [3], it means its possible to make target sum 3 with coin value 3

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            const current = table[i];
            for (let num of numbers) {
                if (i + num <= targetSum) table[i + num] = [...current, num];
            }
        }
    }

    return table[targetSum];
};
//    

// Time : O (m*n *m) => O (m^2 *n) where m = targesum, n = numbers.length another m for coyping m values in result
// Space : O (m*m) where m = targesum, another m for copy the values 

console.log(howSum(8, [2, 3]))
console.log(howSum(7, [2, 4]))
console.log(howSum(300, [7, 14]))
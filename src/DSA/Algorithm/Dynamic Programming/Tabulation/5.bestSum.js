/**
 * Given a target sum and array of numbers. Check target sum can be achived using array of number even using multiple times
 * Array of number will not negative
 * Return the shortest sum from all the sum results. In case of tie in shortest sum we can return any one
 * targetsum = 7
 * numbers = [5,3,4,7]
 * o/p = 7
 */


const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const current = table[i];
                let combination = [...current, num];

                if (!table[i + num] || combination.length < table[i + num].length) {
                    table[i + num] = combination;
                }
            }
        }
    }
    return table[targetSum];
}

// Time : O (m*n *m) => O (m^2 *n) where m = targesum, n = numbers.length another m for coyping m values in result
// Space : O (m*m) where m = targesum, another m for copy the values 

console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(50, [2, 3, 5, 25]));
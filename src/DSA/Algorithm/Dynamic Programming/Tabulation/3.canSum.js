/**
 * Given a target sum and array of numbers. Check target sum can be achived using array of number even using multiple times
 * Array of number will not negative
 * Return true if its possible else false
 * targetsum = 7
 * numbers = [5,3,4,7]
 */
// Notes => Here target sum is reducing the problem (Table based on target sum)
// Since boolean will be return, we can take false as default value
// Seed tivial value => targetSum = 0
// Check current value is true then further value index will be true 

const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if (table[i]) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    return table[targetSum];
}

console.log(canSum(7, [2, 3]))
// console.log(canSum(7, []))
// console.log(canSum(8, [2, 3, 5]))
// console.log(canSum(300, [7, 14]))

// T = O(numbers * targetSum)
// S = O(targetSum)
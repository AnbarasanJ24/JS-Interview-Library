// create a function which return Maximum sub array sum that takes array of integer and number of consecutive elements
let array = [1, 2, 5, 2, 8, 1, 5];
let consecutiveDigits = 3;

// Naive Solutions 
function maxSubArraySum1(array, consecutiveDigits) {
    // Initialize maxSum = 0;

    // Handle base case of array 

    // Loop through the array start with i = 0
    // let initialize currentSum = 0;
    // Loop through the same array start with j = i
    // currentSum += arr[i]
    // Find the max b/t current sum and max sum -> update the result with Max sum

    // return Maxsum
}

// Using sliding window 
function maxSubArraySum(array, consecutiveDigits) {
    // Initialize max sum and temp sum
    let maxSum = 0, tempSum = 0;

    // Base condition 
    if (array === null || array.length === 0)
        return null;

    // loop through the array to create first window
    for (let i = 0; i < consecutiveDigits; i++) {
        maxSum += array[i];
    }

    // update temp sum equal to max sum
    tempSum = maxSum;

    // Loop through the array starting should be next index of window length
    // In temp sum we subtract first element and add next element 
    // Compare max b/t temp sum & max sum and update the result to max sum
    for (let i = consecutiveDigits; i < array.length; i++) {
        tempSum += array[i] - array[i - consecutiveDigits];
        maxSum = Math.max(maxSum, tempSum);
    }
    // return Max sum
    return maxSum;
}

console.log(maxSubArraySum(array, consecutiveDigits))
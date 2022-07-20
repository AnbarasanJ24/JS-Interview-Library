// squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].


var sortedSquares = function (nums) {
    const length = nums.length;
    let i = 0;
    let j = length - 1;

    const sortedArray = new Array(length);
    let pointer = length - 1;

    while (i <= j) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            sortedArray[pointer--] = nums[i] * nums[i];
            i += 1;
        }
        else {
            sortedArray[pointer--] = nums[j] * nums[j];
            j -= 1;
        }
    }

    return sortedArray;
};
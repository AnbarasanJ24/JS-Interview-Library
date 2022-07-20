
// Given a sorted array of distinct integers and a target value, return the index if the target is found.If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Input: nums = [1, 3, 5, 6], target = 5
// Output: 2

// https://leetcode.com/problems/search-insert-position/

var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if (target === nums[middle]) return middle;

        if (target >= nums[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return left;
};

// Given the array nums consisting of 2n elements in the form[x1, x2,..., xn, y1, y2,...,yn].
// Return the array in the form[x1, y1, x2, y2,..., xn, yn].
// Input: nums = [2, 5, 1, 3, 4, 7], n = 3
// Output: [2, 3, 5, 4, 1, 7]
// Explanation: Since x1 = 2, x2 = 5, x3 = 1, y1 = 3, y2 = 4, y3 = 7 then the answer is[2, 3, 5, 4, 1, 7].

// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function (nums, n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }

    return result;

};

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.
//     Input: matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

// https://leetcode.com/problems/set-matrix-zeroes/submissions/
// https://takeuforward.org/data-structure/set-matrix-zero/

var setZeroes = function (matrix) {

    if (matrix === null || matrix.length === 0) return [[]];

    let rows = matrix.length, cols = matrix[0].length;
    let dummyRow = Array(rows).fill(-1);
    let dummyCol = Array(cols).fill(-1);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                dummyRow[i] = 0;
                dummyCol[j] = 0;
            }
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dummyRow[i] == 0 || dummyCol[j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
};

// Time complexity O((N*M))
// Space complexity O(N+M)


// Given an array nums of distinct integers, return all the possible permutations.You can return the answer in any order.
// Input: nums = [1, 2, 3]
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
// https://leetcode.com/problems/permutations/

// Part of https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/

var permute = function (nums, index = 0) {
    let result = [];
    calculatePermutations(0, nums, result);
    return result;

};

var calculatePermutations = function (index, nums, result) {

    if (index === nums.length) {
        let current = [];
        for (let i = 0; i < nums.length; i++) {
            current.push(nums[i]);
        }
        result.push(current);
        return;
    }
    for (let i = index; i < nums.length; i++) {
        swap(i, index, nums);
        calculatePermutations(index + 1, nums, result);
        swap(i, index, nums);
    }
}

var swap = function (first, second, nums) {
    let temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}

// Time complexity O(N!*N)
// Space complexity O(N+M)
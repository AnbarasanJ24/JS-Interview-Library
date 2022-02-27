// Pascal's Triangle 2
// Given an integer rowIndex, return the rowIndexth(0 - indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Input: rowIndex = 3
// Output: [1, 3, 3, 1]

// https://leetcode.com/problems/pascals-triangle-ii/

var getRow = function (rowIndex) {
    if (rowIndex <= 0) return [1];

    let result = [[1]];

    for (let i = 1; i <= rowIndex; i++) {
        result[i] = [1];

        for (let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result[i][i] = 1;
    }

    return result[rowIndex];
};
// Search a 2D Matrix
// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Input: matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
// Output: 


var searchMatrix = function (matrix, target) {

    let i = 0;
    let j = matrix[0].length - 1;

    while (i < matrix.length && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        } else if (target < matrix[i][j]) {
            j--;
        } else {
            i++
        }
    }
    return false;
};


var searchMatrix = function (matrix, target) {

    let n = matrix.length;
    let m = matrix[0].length;

    let low = 0;
    let high = (n * m) - 1;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);
        let first = Math.floor(mid / m);
        let second = Math.floor(mid % m);

        if (matrix[first][second] === target) {
            return true;
        } else if (target < matrix[first][second]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;

};
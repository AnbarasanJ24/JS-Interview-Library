
// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Input: mat = [[1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25

// Notice that element mat[1][1] = 5 is counted only once.

// https://leetcode.com/problems/matrix-diagonal-sum/

var diagonalSum = function (mat) {

    if (mat.length < 0) return -1;
    let diagonalSum = 0;

    // Handle (0,0),(1,1),(2,2)
    for (let i = 0; i < mat.length; i++) {
        diagonalSum += mat[i][i];
    }

    // Handle (0,2),(1,1),(2,0)
    for (let i = 0, j = mat.length - 1; i < mat.length; i++, j--) {
        diagonalSum += mat[i][j];
    }

    // Remove middle value in case of odd rows
    if (mat.length % 2 === 1) {
        diagonalSum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
    }

    return diagonalSum;
};

// public int diagonalSum(int[][] mat) {
//         int res = 0;
//         int n = mat.length;
//     for (int i = 0; i < n; i++) {
//         res += mat[i][i]; // Primary diagonals are row = column!
//         res += mat[n - 1 - i][i]; // Secondary diagonals are row + column = n-1!
//     }
//     return n % 2 == 0 ? res : res - mat[n / 2][n / 2]; // if n is a odd number, that mean we have added the center element twice!
// }


// Given a signed 32 - bit integer x, return x with its digits reversed.If reversing x causes the value to go outside the signed 32 - bit integer range[-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64 - bit integers(signed or unsigned).

//     https://leetcode.com/problems/reverse-integer/

var reverse = function (x) {

    let isNegative = x < 0 ? -1 : 1;
    x = Math.abs(x);
    let result = 0;
    let remainder = 0;

    while (x !== 0) {
        remainder = x % 10;
        result = result * 10 + remainder;
        x = Math.floor(x / 10);
    }

    if (result > 2 ** 31) return 0;

    return result * isNegative;
};
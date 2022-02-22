
// Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees(clockwise).
// You have to rotate the image in -place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.
// https://takeuforward.org/data-structure/rotate-image-by-90-degree/
// https://leetcode.com/problems/rotate-image/

// Naive
// Created dummy array and take first column (reverse) and place it in the first row |__
// 1 2 3      7 4 1
// 4 5 6      8 5 2
// 7 8 9      9 6 3

// for i = 0 to arr.length
//      for j = 0  to arr[0].length
//          newArray[i][j] = arr[j - arr.length -1][i]
//                 a[0][0] = a[2][0]
//                 a[0][1] = a[1][0]
//                 a[0][2] = a[0][0]

// Time complexity O (N*N) and space complexity O (N*N)

// Efficient
// We need to transpose the matrix first then revese each row
// If you see above approach, will first take column (reverse) and place it as row(same concept)
// Transpose a[i][j] = a [j][i] (Take first column and place it on first row)
// For Transpose we need extra array to copy, In case of square matrxi we can do in place like below
// Note In reverse, we need to loop half matrix, else in case of  1,2,3 it will be 3,2,1 as first then 3,2,1 as middle and 1,2,3 as last

var rotate = function (matrix) {

    // Transpose a matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse the rows
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length - 1 - j];
            matrix[i][matrix.length - 1 - j] = temp;
        }
    }

};

// Time complexity O (N*N) and space complexity O (1)
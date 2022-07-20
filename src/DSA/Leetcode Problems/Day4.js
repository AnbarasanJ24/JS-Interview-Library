// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown

// Input: numRows = 5
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
// https://leetcode.com/problems/pascals-triangle/

var generate = function (numRows) {

    if (numRows <= 0) return [[]];

    let result = [[1]];

    for (let i = 1; i < numRows; i++) {
        result[i][0] = [1];

        for (let j = 1; j < i; j++) {
            // [[1], [1,1], [1,2,1]]
            // [[0,0], [(1,0), (1,1) , (2,0),(2,1), (2,2)]]
            // i = 2 , j =1
            // result[2][1] = result [1][0] + result[1][1];

            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result[i][i] = 1;
    }

    return result;
};


// Write a function that reverses a string.The input string is given as an array of characters s.
// You must do this by modifying the input array in -place with O(1) extra memory.
//     Input: s = ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]

// https://leetcode.com/problems/reverse-string/

var reverseString = function (s) {

    let left = 0, right = s.length - 1;
    let temp;

    while (left < right) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};
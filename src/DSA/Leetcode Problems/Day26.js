// Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non - decreasing order, find the starting and ending position of a
// given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// Naive 
// We can create a function which return first occurance, for start checking from starting and last check from last 
// Once we find the first and last poistion then return the ans 
// Time compleixty will be O (N)


// Efficient
// Same as BS, For first occurance once we find the target there is chance we can find the start poition on left side
// same like first option, once we find the possible middle there is a chance we can find the end position on right side
// Based on boolean, check first and last occurance in the array and return it 
// key is, once we find the middle then decide which side to check again for first or last position


var searchRange = function (nums, target) {
    let start = firstLastOccurance(nums, target, true);
    let end = firstLastOccurance(nums, target, false);
    return [start, end];
};

var firstLastOccurance = function (nums, target, firstIndex) {
    let left = 0;
    let right = nums.length - 1;
    let ans = -1;

    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2);

        if (target < nums[middle]) {
            right = middle - 1;
        } else if (target > nums[middle]) {
            left = middle + 1;
        } else {
            ans = middle;
            if (firstIndex == true) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
    }

    return ans;
}
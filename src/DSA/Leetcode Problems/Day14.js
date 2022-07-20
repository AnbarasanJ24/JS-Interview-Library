// Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range[1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.

// https://takeuforward.org/data-structure/find-the-duplicate-in-an-array-of-n1-integers/
// https://leetcode.com/problems/find-the-duplicate-number/

// Naive - Sort the array and look for adjacent numbers are same
// Time complexity O (N LogN) + O(N) and space complexity O(1)

// Using set - we can lopp the array and push the element to the set
// If the number already appear then return the number
// Time complexity O(N) and space complexity O(N)

// Efficient
// 1. Using slow and fast pointer concept, find the first collision (At least one slow and fast move should be done)
// 2. Move the fast pointer to the starting
// 3. Move slow and fast one by one and find the second collision and return its value
// Time complexity O(N) and space complexity O(N)


var findDuplicate = function (nums) {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast)

    fast = nums[0];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;

};

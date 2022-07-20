// https://leetcode.com/problems/jump-game/

// You are given an integer array nums.You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that positio
// Return true if you can reach the last index, or false otherwise.


// Input: nums = [3, 2, 1, 0, 4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what.Its maximum jump length is 0, which makes it impossible to reach the last index.

// https://www.youtube.com/watch?v=muDPTDrpS28

var canJump = function (nums) {
    let length = nums.length;
    let maxreachable = 0;

    for (let i = 0; i < length; i++) {

        if (maxreachable < i) {
            return false;
        }

        maxreachable = Math.max(maxreachable, i + nums[i]);
    }
    return true;
};
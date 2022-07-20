// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
//     Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function (jewels, stones) {

    if (jewels === null || stones === null) return -1;
    if (jewels.length === 0 || stones.length === 0) return -1;
    let result = 0;


    let jewelsSet = new Set(jewels);
    for (let stone of stones) {
        if (jewelsSet.has(stone)) {
            result += 1;
        }
    }

    return result;
};

// There are n kids with candies.You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.

// Input: candies = [2, 3, 5, 1, 3], extraCandies = 3
// Output: [true, true, true, false, true]
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function (candies, extraCandies) {
    if (candies === null || candies <= 1) return [];
    let maxCandies = candies[0];

    for (let i = 1; i < candies.length; i++) {
        if (candies[i] > maxCandies) {
            maxCandies = candies[i];
        }
    }

    for (let i = 0; i < candies.length; i++) {
        candies[i] = (candies[i] + extraCandies) >= maxCandies ? true : false;
    }

    return candies;
};

// Given the array of integers nums, you will choose two different indices i and j of that array.Return the maximum value of(nums[i] - 1) * (nums[j] - 1).

// Input: nums = [3, 4, 5, 2]
// Output: 12
// Explanation: If you choose the indices i = 1 and j = 2(indexed from 0), you will get the maximum value, that is, (nums[1] - 1) * (nums[2] - 1) = (4 - 1) * (5 - 1) = 3 * 4 = 12. 
//https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/


var maxProduct = function (nums) {
    if (nums === null || nums.length <= 1) return -1;

    let firstMax = nums[0] > nums[1] ? nums[0] : nums[1];
    let secondMax = nums[0] > nums[1] ? nums[1] : nums[0];

    for (let i = 2; i < nums.length; i++) {

        if (nums[i] > firstMax) {
            secondMax = firstMax;
            firstMax = nums[i];
        } else if (nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }
    return ((firstMax - 1) * (secondMax - 1));
};
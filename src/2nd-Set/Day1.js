// A string is good if there are no repeated characters.
// Given a string s, return the number of good substrings of length three in s.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".

// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

var countGoodSubstrings = function (s) {
    let goodString = 0;
    let currentWindow = [];

    if (s === null || s.length === 0) return -1;

    let a = s[0], b = s[1], c = s[2];

    if (isUnique(a, b, c)) {
        goodString++;
    }

    for (let i = 3; i < s.length; i++) {
        a = b;
        b = c;
        c = s[i];

        if (isUnique(a, b, c)) {
            goodString++;
        }
    }

    return goodString;

};

var isUnique = function (a, b, c) {

    if (a !== b && b !== c && c !== a) {
        return true;
    }

    return false;
}


// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return 
// this value.Any answer with a calculation error less than 10 - 5 will be accepted
// Input: nums = [1, 12, -5, -6, 50, 3], k = 4
// Output: 12.75000
// Explanation: Maximum average is(12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// https://leetcode.com/problems/maximum-average-subarray-i/

var findMaxAverage = function (nums, k) {

    let currentSum = 0, maxSum = 0;

    if (nums === null || nums.length === 0) return [];

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    maxSum = currentSum;

    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / k;
};

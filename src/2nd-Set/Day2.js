// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

//https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
    let currentWindow = "";
    let maxSize = -1;

    if (s === null || s === '' || s.length === '') return 0;

    for (let char of s) {
        if (currentWindow.indexOf(char) > -1) {
            let duplicateIndex = currentWindow.indexOf(char);
            currentWindow = currentWindow.substring(duplicateIndex + 1);
        }
        currentWindow += char;
        maxSize = Math.max(maxSize, currentWindow.length);
    }
    return maxSize;
};
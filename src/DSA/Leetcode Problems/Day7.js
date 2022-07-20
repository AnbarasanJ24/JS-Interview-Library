// Given an array nums containing n distinct numbers in the range[0, n], return the only number in the range that is missing from the array.
//     Input: nums = [3, 0, 1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range[0, 3]. 2 is the missing number in the range since it does not appear in nums.
//     https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
    let length = nums.length;

    if (nums === null || nums.length === 0) return -1;
    let sum = Math.floor((length * (length + 1)) / 2);

    for (let num of nums) {
        sum -= num;
    }

    return sum;
};




// You are given two integer arrays nums1 and nums2, sorted in non - decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non - decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.To accommodate this, nums1 has a length of m + n, 
// where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.nums2 has a length of n.
// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]
// Explanation: The arrays we are merging are[1, 2, 3] and[2, 5, 6].
// The result of the merge is[1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.
//     https://leetcode.com/problems/merge-sorted-array/

var merge = function (nums1, m, nums2, n) {

    let first = m - 1;
    let second = n - 1;
    let last = m + n - 1;

    while (first >= 0 && second >= 0) {
        if (nums1[first] > nums2[second]) {
            nums1[last] = nums1[first];
            first--;
        } else {
            nums1[last] = nums2[second];
            second--;
        }
        last--;
    }

    if (second !== -1) {
        while (second >= 0) {
            nums1[last] = nums2[second];
            second--;
            last--;
        }
    }
}
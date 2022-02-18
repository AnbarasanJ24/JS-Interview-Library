// Sort Colors

// Given an array nums with n objects colored red, white, or blue, sort them in -place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Input: nums = [2, 0, 2, 1, 1, 0]
// Output: [0, 0, 1, 1, 2, 2]

// Brute Force
// Sort the nums with Time compleixty O (N) & space complexity O (1)

// Second approach
// create 3 count Variable count_0, count_1, count_2, Loop the array and increase counter variable for 0,1,2
// run a loop again to keep zero at first, 1 at second and 2 at last using while loop
// Time compleixty O (N) + O (N) & space complexity O (1)

// Best approach
// create 3 pointers, where low holds 0 , mid holds 1 and high holds 2
// Here based on mid value we are going to swap the variables
// Loop the array, if the current value is 0 then it belongs to low, so swap low & mid and low++, mid++
// If the current value is 1 then it belongs to mid, just move the mid to next step mid++
// If the current value is 2 then it belongs to high, swap mid & high and high--
// Time compleixty O (N)  & space complexity O (1)


var sortColors = function (nums) {

    if (nums === null || nums.length === 1) return;

    let low = 0; //Hold Zero's
    let mid = 0; // Hold One's
    let high = nums.length - 1; //Hold Two's

    while (mid <= high) {
        switch (nums[mid]) {
            case 0:
                swap(nums, low++, mid++);
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(nums, mid, high--);
                break;
        }
    }

};

var swap = function (nums, idx1, idx2) {
    let temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
}
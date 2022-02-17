
// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
// For example, for arr = [1, 2, 3], the following are considered permutations of arr: [1, 2, 3], [1, 3, 2], [3, 1, 2], [2, 3, 1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer.More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container.If such arrangement is not possible, the array must be rearranged as the lowest possible order(i.e., sorted in ascending order).
// For example, the next permutation of arr = [1, 2, 3] is[1, 3, 2].
//     Similarly, the next permutation of arr = [2, 3, 1] is[3, 1, 2].
// While the next permutation of arr = [3, 2, 1] is[1, 2, 3] because[3, 2, 1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.
// The replacement must be in place and use only constant extra memory.

// Input: nums = [1, 2, 3]
// Output: [1, 3, 2]

// https://leetcode.com/problems/next-permutation/


//Brute Force
// 1. Generate all possible permuation combination and store in a array
// 2. Loop linearly and find the input element & return next element of it
// 3. In case last element return first element

// Time complexity O (N! * N)
// Space Complexity O (N! + N)


// Algorithm
// 1. In the dictonary ondragover, from reverse it will be always in increasing ondragover,
//    So we need to find the element which collapsing the order. From reverse start checking
//    whether first element is smaller than second 1,3,5,4,2 here 4 is first elem and 2 is second elem
// 2. Now we have a breaking point i.e 3, next find the next greater number for the index i.e 4, because since 1,3 seq is
//    over the next seq could be 1, 4
// 3. After finding 3, 4, swap both numbers to 1,4,5,3,2
// 4. In order to get least ranking one from 4, reverse the element after 4 i,e 5,3,2 (Increasing order to decereasing order)
// 5. finaly we will get next permutation 1,4,2,3,5 



var nextPermutation = function (nums) {
    let index1 = -1;
    let index2 = -1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index1 = i;
            break;
        }
    }

    if (index1 >= 0) {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] > nums[index1]) {
                index2 = i;
                break;
            }
        }
        swap(nums, index1, index2);
    }

    reverse(nums, index1 + 1, nums.length - 1);
};

var swap = function (nums, idx1, idx2) {
    let temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
}

var reverse = function (nums, left, right) {
    while (left < right) {
        swap(nums, left++, right--);
    }
}

// Time complexity O (N)
// Space Complexity O (1)



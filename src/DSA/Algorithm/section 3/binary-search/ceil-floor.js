
// Ceil

let arr = [2, 3, 5, 9, 14, 16, 18];
let target = 15;

// Naive 
// Lopp from the last and check target is less than current element 15 < 18
// If so move one step and continue the process
// when the condition fails 15 < 14, return the next element of 14 i.e 16
// Time complexity O (N) , Space complexity O (1)


// Algorithm 
// Find the greater or target numbers of the target => [16,18]
// Choose the smallest number in the list [first one] => 16
// result is 16

// The diff between this question and BS, If we didn't find the element return -1 in BS
// In this question return left which is middle next number

const ceil = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);

        if (target === arr[middle]) {
            return arr[middle];
        } else if (target > middle) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return arr[left];
}


// Floor

// let arr = [2, 3, 5, 9, 14, 16, 18];
// let target = 15;


// Algorithm
// It is opposite to ceil, find the smallest and equal to target number => [2,3,5,9,14]
// Return the greatest number of it => 14

const floor = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);

        if (target === arr[middle]) {
            return arr[middle];
        } else if (target > middle) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return arr[right];
}


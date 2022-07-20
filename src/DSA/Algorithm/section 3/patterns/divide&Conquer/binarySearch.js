// Why Binary Search ?
// < !--Best case -->
//     When we find the target on finding the first middle element then that would be the best case
//     In case of different size, the first ever middle element contribute the result so size doesn't matter 
//     Time compleity will be O(1)

//     < !--Worst case -->
//     we need to check how many levels we are traversing to the last element
//     When we start the seach, there is no dividing happens so N / 2 ^ 0 
//     Then for following levels
//         0th level ==> N => N / 2 ^ 0
//         1st level ==> N / 2 => N / 2 ^ 1
//         2nd level ==> (N / 2) / 2 => N / 4 => N / 2 ^ 2
//         3rd level ==> (N / 4) / 2 => N / 8 ==> N / 2 ^ 3
//         .
//         .
//         .
//         1 => This is the kth level so N / 2 ^ k

//         1 = N / (2 ^ k)
//         N = 2 ^ k 

//         Taking log on both side 
//         log N = log(2 ^ K)
//         log N = k log(2)
//         K = log2 N
//         (For Time complexity, we need to find how many number of levels(or comparison) we are travelling to find the target)
//         K is the total number of level in the worst case 

//         Total comparison in the worst case is log2 N
//         In case of 1 million elements, for linear search it would be 1 million comparison 
//         In case of binary search it would be log2(1, 000, 000) will be 20 comparison  


// Create a function which take sorted array and value to be find in the array. 
// In case of available return the index else -1
let arr = [1, 2, 3, 4];
let searchValue = 4;

// Naive solution
const linearSearch = (arr, searchValue) => {
    // Handle Base case

    // Loop through the array 
    // If array value matched with search Value return index

    // return -1
}

// Efficient approach 
const binarySearch = (arr, searchValue) => {
    // Handle base case 
    if (arr === null || arr.length === 0) {
        return -1;
    }
    // Initialize left and right value
    let left = 0, right = arr.length - 1;


    // Loop till left less than right 
    // Calculate middle using left and right 
    // if middle equal to searchValue then return index
    // if search value less than middle then search will be in left side
    // if search value greater than middle then search will be in right side
    while (left <= right) {
        // let middle = Math.floor((left + right) / 2); // Will give problem whnen both left and right are big numbers 

        let middle = left + Math.floor((right - left) / 2);

        if (arr[middle] === searchValue)
            return middle;
        else if (searchValue < arr[middle]) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch(arr, searchValue))

// Time complexity O (Log N)
// Space complexity O (1)


// Order Agnostic Binary Search
// In the question it is mentioned as sorted but not as acending or descending
// We can compare first two numbers to find but in case of this scenerio it will fail [3,3,5,6,9]
// So we can compare start and end elements to decide [3,3,5,6,9]
// If 3 is greater than 9 => false then ascending order
// [9,6,5,3,3], if 9 is greater than 3 then descending order 

const orderAgnosticBS = (arr, targetValue) => {
    let left = 0;
    let right = arr.length;

    let isAsc = arr[left] < arr[right] ? true : false;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);

        if (arr[middle] === searchValue)
            return middle;

        if (isAsc) {
            if (searchValue < arr[middle]) {
                right = middle - 1;
            }
            else {
                left = middle + 1;
            }
        } else {
            if (searchValue < arr[middle]) {
                right = middle + 1;
            }
            else {
                left = middle - 1;
            }
        }
    }


}
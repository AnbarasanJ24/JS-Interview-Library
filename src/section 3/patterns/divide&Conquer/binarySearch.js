// Create a function which take sorted array and value to be find in the array. 
// In case of available return the index else -1
let arr = [1, 23, 4];
let searchValue = 4;

// Naive solution
const binarySearch1 = (arr, searchValue) => {
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
        let middle = Math.floor((right + left) / 2);

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
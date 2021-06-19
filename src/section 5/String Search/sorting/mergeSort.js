// Merge sort use spiliting the array to single element and sort the array and merge the array
// First create a function that take two sorted array and merge it together
// Call Merge sort for left and right and then merge the result of both using merge array function 

// Time Complexity 
// Best, Average, worst -> O (N log N), where log N is for spiliting the array from start to one. For 8 elements in an array we need 3 splits to make it as 1, 
// so 2 power what gives 8-> 2^3 = 8 thats why we use log N and N for merge the array which have while loop
// Space complexity is O (N) for pushing the result in seperate array (Merge function)

let arr1 = [1, 10, 50]
let arr2 = [2, 14, 99, 100]

const mergeArray = (arr1, arr2) => {

    // Initialize result array
    let result = [];

    // Base case 
    if (arr1 === null && arr2 === null) return result;

    if (arr1 === null || arr2 === null) {
        result = arr1 ? arr1 : arr2;
        return result;
    }

    // Initialize i and j ->0
    let i = 0, j = 0;

    // Run a loop to check value from both element
    //  if first is smaller than push first and move i
    //  if second is smaller then push second and move j
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result = [...result, arr1[i]];
            i++;
        } else {
            result = [...result, arr2[j]];
            j++;
        }
    }

    // Check i is less than arr1 length 
    // push the element in the first array and move i
    while (i < arr1.length) {
        result = [...result, arr1[i]];
        i++;
    }

    // Check j is less than arr2 length 
    // push the element in the second array and move j
    while (j < arr2.length) {
        result = [...result, arr2[j]];
        j++;
    }

    return result;

}

const mergeSort = (arr) => {

    // Base case
    if (arr.length <= 1) return arr;

    // Find middle of the array
    // Call Merge sort of left
    // Call Merge sort of right
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // return result of left and right merged array
    return mergeArray(left, right);
}
let arr = [2, 3, 1, 5, 7, 2, 9, 4]
console.log(mergeSort(arr))
//  For quick sort, take one pivot element and keep the small values in the left of it and greater value in the right
//  Now pivot element will be in correct place, then repeat the same for left and right half 

// Like Merge sort, we have seperate function to find the pivot and arrange the elements based on pivot 
// This funtion will return pivot index and the left & right side order doesn't matter 

// Get a pivot index and call quick sort for left and right side 
// Since arr length is not changing like merge sort, base case will be based on chnaging parameter of left and right index


// Time comeplexity ( Splitting the array - Decomposition)
// we are doing O (N) comparison for per decomposition (log N)
// Best, Average -> O (N log N) and space comnplexity O (N log N), worst case is O (N^2)
// In worst case, for example array is already sorted with pivot index as start 
// then decomposition will be O (N) then O (N) comparison for O (N) Decompostion, to solve this we can pick pivot as rando or middle 



const pivotFinder = (arr, start, end) => {

    // swap function
    const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] }

    // base case
    if (arr === null || arr.length === 0)
        return [];

    // let initlaize pivot and pivot index
    let pivot = arr[start];
    let pivotIndex = start;

    // run  a loop over the array 
    // if current element is less than pivot 
    // increase pivot index 
    // swap the current and pivot index 
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }

    // swap pivot with pivot index value
    swap(arr, start, pivotIndex);

    // return pivot index
    return pivotIndex;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {

    if (left < right) {
        let pivot = pivotFinder(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
    return arr;

}

let arr = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(quickSort(arr));
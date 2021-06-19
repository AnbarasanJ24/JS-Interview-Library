//  For quick sort, take one pivot element and keep the small values in the left of it and greater value in the right
//  Now pivot element will be in correct place, then repeat the same for left and right half 


// Like Merge sort, we have seperate function to find the pivot and arrange the elements based on pivot 
// This funtion will return index and the left & right side order doesn't matter 

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
    for (let i = start + 1; i < arr.length; i++) {
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

let arr = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(pivotFinder(arr));
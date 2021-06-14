//  It will bubble up the largest value to the top 

let arr = [5, 3, 2, 4, 1];

const bubbleSort = (arr) => {

    // Base Case
    if (arr === null || arr.length === 0)
        return [];

    // Run a loop of i -> arr.length to 0 
    // Run a loop of j -> 0 to arr.length -1
    // if first elem greater than second then swap 
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    //return same array 
    return arr;
}

// swap Function 
const swap = (arr, index1, index2) => { [arr[index1], arr[index2]] = [arr[index2], arr[index1]] }

console.log(bubbleSort(arr))
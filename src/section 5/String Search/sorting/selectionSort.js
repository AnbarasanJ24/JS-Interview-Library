//  It is smiliar to Bubble sort, where we will find the smallest value and keep it at front

let arr = [1, 5, 2, 4, 3]

const selectionSort = (arr) => {

    // base case
    if (arr === null || arr.length === 0)
        return []

    // swap function
    const swap = (arr, index1, index2) => { return [arr[index1], arr[index2]] = [arr[index2], arr[index1]] }

    // Run a loop of i -> 0 to arr length
    // min will be current value 
    // Run a loop for j -> i+1 to arr.length 
    // If arr[j] < arr[i]
    // min = j
    // swap current value with min value 
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(arr, i, min);
    }

    // return arr
    return arr;
}

console.log("Selection sort", selectionSort(arr))
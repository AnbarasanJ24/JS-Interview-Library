//  It will bubble up the largest value to the top 
//  If the data is almost sorted by using noswap technique we can use bubble sort 

let arr = [1, 5, 2, 3, 4];

const bubbleSort = (arr) => {

    // swap Function 
    const swap = (arr, index1, index2) => { [arr[index1], arr[index2]] = [arr[index2], arr[index1]] }

    // Base Case
    if (arr === null || arr.length === 0)
        return [];
    let noSwaps = true;

    // Run a loop of i -> arr.length to 0 
    // Run a loop of j -> 0 to arr.length -1
    // if first elem greater than second then swap 
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    //return same array 
    return arr;
}


console.log(bubbleSort(arr))
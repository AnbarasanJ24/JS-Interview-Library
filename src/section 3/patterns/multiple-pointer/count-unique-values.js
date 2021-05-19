// Create  a function which take sorted array as input, count unique value in the array 
let arr = [1, 1, 1, 1, 2]
// Output 2 - [1,2]

function uniqueValues(arr) {
    // Base case 
    if (arr == null || arr.length === 0)
        return 0;

    // Define start 
    let start = 0;

    // Loop over the array 
    // if array start and end is same then move end 
    // if array start and end are different then move start and end 
    // also update end value at start 
    for (let end = 1; end < arr.length; end++) {
        if (arr[start] !== arr[end]) {
            start++;
            arr[start] = arr[end];
        }
    }

    // return end pointer +1
    return start + 1;
}

// console.log(uniqueValues(arr));



// Using set 
function uniqueValues1(arr) {
    // Base case 
    if (arr == null || arr.length === 0)
        return 0;
    let set = new Set();
    for (let val of arr) {
        set.add(val)
    }
    console.log(set)
    // return end pointer +1
    return [...set].length;
}

console.log(uniqueValues1(arr));
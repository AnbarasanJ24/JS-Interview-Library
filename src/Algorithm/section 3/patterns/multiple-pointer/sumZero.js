// write a function which accepts sorted array where find the pair which give zero.
// Return the pair in array and in case of no pair return undefined 

let arr = [-3, -2, -1, 1, 0, 1, 2, 3];
// output [-3,3]

// Naive Solutions 
function sumZero(arr) {

    // Check base condition 

    // Create a array to return at last -> O (1)

    // Loop each number i - O (N)
    // loop each Number  - O(N)
    // if arr[i]+arr[j] = zero 
    // [arr[i],arr[j]]
    // break 

    // if array is empty then return undefined else array
}


function sumZero(arr) {

    // Check base condition
    if (arr === null || arr.length === 0)
        return undefined;

    // Initialize left and right
    let left = 0, right = arr.length - 1;
    let result = [];

    // Loop the array when left less than right  - O (N/2) -> O (log N)
    // Now find the sum using left and right 
    // if the sum === 0 then return the array with left and right 
    // if sum > 0 then right--
    // else left++ 
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            result.push(arr[left], arr[right]);
            break;
        }
        else if (sum > 0)
            right--;
        else
            left++;
    }
    return result.length > 0 ? result : undefined;
    // if array is empty then return undefined else array
}

console.log(sumZero(arr));

// Time complexity O (N/2) -> O (log N)
// Space complexity O (1)
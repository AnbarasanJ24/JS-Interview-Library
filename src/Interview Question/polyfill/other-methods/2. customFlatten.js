// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
// function flatten(inputArray) => output [1, 2, 3, 4, 5, 6, 7, 8, 9]

// We have Depth params here, it is used to determine how many levels we can flat the array
// arr = [1,2,3] depth = 0 , result = [1,2,3]
// arr = [1, [2], [[3]]], Here Depth of 1 is 0, 2 is 1 because enclosed by one pair of []
// and for 3 depth is 2, it is enclosed by two pairs of [[]]

// Steps
// 1. we need to return the result as Array
// 2. Loop the array and check if the element is Array or not
// 3. If it is  Array then recusrively call the method again else add it to the result
// 4. For each recursive call, we proccessed one pair of array so reduce the depth by 1


// https://bigfrontend.dev/problem/implement-Array-prototype.flat

let inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];

Array.prototype.flatten =  function(...args){
    let flattenResult = [];
    let source = this;
    let depth = args[1] || 0;
    flatten(source, depth, flattenResult);
    return flattenResult
}

function flatten(arr, depth, result) {

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i]) && depth != 0) {
            flatten(arr[i], depth - 1, result);
        } else if(!Array.isArray(arr[i]) || depth === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(inputArray.flatten())
console.log(inputArray.flatten(arr, 1))
console.log(inputArray.flatten(arr, 2)) 






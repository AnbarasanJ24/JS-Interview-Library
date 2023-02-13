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
// 3. If it is  Array and depth is not equal to zero then recusrively call the method again 
// 4. For each recursive call, we proccessed one pair of array so reduce the depth by 1
// 5. If its not a array or depth is zero then add to the result


// https://bigfrontend.dev/problem/implement-Array-prototype.flat

let inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];

function flatten(source, depth, result = []) {

    for (let index = 0; index < source.length; index++) {
        let currentValue = source[index];
        
        if (Array.isArray(currentValue) && depth != 0) {
            flatten(currentValue, depth - 1, result);
        } else if (!Array.isArray(currentValue) || depth === 0) {
            result.push(currentValue);
        }
    }

    return result;
}

console.log(flatten(inputArray, Infinity))
console.log(flatten(inputArray, 1))
console.log(flatten(inputArray, 2))






// Need to remove
// Array.prototype.flatten =  function(...args){
//     let flattenResult = [];
//     let source = this;
//     let depth = args[1] || 0;
//     flatten(source, depth, flattenResult);
//     return flattenResult
// }

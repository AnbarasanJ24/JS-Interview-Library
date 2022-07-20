// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// https://bigfrontend.dev/problem/implement-Array-prototype.flat

// we can flat the array with given depth,
// when we encounter a array take the elements and push it to the new array
// Array.isArray(arr) will check and confirm whether it is array or not
// 

const arr = [1, [2], [3, [4]]];
console.log(flat(arr))
console.log(flat(arr, 1))
console.log(flat(arr, 2))

function flat(arr, depth = 1) {
    return flatten(arr, depth, []);
}

function flatten(arr, depth, result) {

    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i]) || depth === 0) {
            result.push(arr[i]);
        } else if (Array.isArray(arr[i]) && depth != 0) {
            flatten(arr[i], depth - 1, result);
        }
    }
    return result;
}

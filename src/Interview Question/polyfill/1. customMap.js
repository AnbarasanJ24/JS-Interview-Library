/**
 * The map() method returns a new array, where it will call a callback function on each value
 * const numbers = [1,2,3];
 * const result = numbers.map(num => num *2)
 * o/p => [2,4,6]
 */

// Notes
// It will return an array
// It will call a function on every value in the array 
// Before call the function check  element exits in array 
// Each function will take three arguments, num, index, numbers

Array.prototype.customeMap = function (callback) {

    if (typeof callback !== 'function') {
        throw new Error("Invalid function");
    }

    let sourceArray = this;
    let result = new Array(sourceArray.length);

    for (let index = 0; index <= sourceArray.length; index++) {
        if (sourceArray.includes(sourceArray[index])) {
            result[index] = callback(sourceArray[index], index, sourceArray);
        }
    }

    return result;
}

const numbers = [1, 2, 3];
const result = numbers.customeMap(num => num * 2)
console.log(result);
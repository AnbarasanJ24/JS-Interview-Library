/**
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 * const numbers = [1,2,3,4,5]
 * const result = numbers.filter(num=> num > 2)
 * O/p => [3,4,5]
 */

// Notes
// Same like custom Map, It's return a array 
// Function should be called for each value 
// If the function return true then add it to the result else not 
// function is called with num, index, numbers 



Array.prototype.customFilter = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error('Invalid argument');
    }

    const sourceArray = this;
    const result = [];

    for (let index = 0; index < sourceArray.length; index++) {
        if (callback(sourceArray[index], index, sourceArray)) {
            result[index] = sourceArray[index];
        }
    }
    return result;
}



const numbers = [1, 2, 3, 4, 5]
const result = numbers.customFilter(item => item > 2)
console.log(result);
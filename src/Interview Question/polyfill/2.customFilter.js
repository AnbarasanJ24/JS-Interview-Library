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
// function is called qith num, index, numbers



Array.prototype.customFilter = function (callback, context) {
    if (typeof callback !== 'function') {
        throw new Error('Invalid argument');
    }

    const result = [];
    const sourceArray = this;

    for (let index = 0; index < sourceArray.length; index++) {
        if (callback.call(context, sourceArray[index], index, sourceArray)) {
            result.push(sourceArray[index]);
        }
    }
    return result;
}



const numbers = [1, 2, 3, 4, 5]
const result = numbers.customFilter(item => item > 2)
console.log(result);
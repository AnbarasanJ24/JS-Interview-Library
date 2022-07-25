//  Reduce Function 
//  If we are not passing initial value then it will take first element as accumulator and starts with second element 

// let result = arr.reduce(sum, 0);


// Error Cases 
// arr.reduce() -> Call reduce without any call back will gice undefined function error 
// [].reduce(sum) -> Call reduce on empty array with no initial value -> error "Reduce of empty array with no initial value"

// Corner casess
// [].reduce(sum,1) -> call reduce on empty array with initial value then initial value is the output 

// Working case
// Initilize first index and result
// arr = [1,2,3] custoemReduce(sum)
// If the array have call back function but no initial value
// Make the acc as inital value and update index, so it start from second value in while
// arr = [1,2,3] custoemReduce(sum,1)
// If the array have call back function with initial value 

Array.prototype.customReduce = function (callback, initialValue) {

    // Corner Case
    if (this === null || this === undefined) {
        throw new TypeError(`Array.prototype.customReduce called on null or undefined`);
    }
    if (!callback || typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }
    if (!this.length) {
        if (arguments.length < 2) {
            throw new TypeError(`Reduce called on Empty array with no initial value`);
        } else if (arguments.length === 2) {
            return initialValue;
        }
    }
    // Happy path
    var index = 0;
    var accumulator = initialValue;
    if (arguments.length < 2) {
        accumulator = this[index++];
    }

    while (index < this.length) {
        if (Object.prototype.hasOwnProperty.call(this, index)) {
            accumulator = callback(accumulator, this[index], index, this);
        }
        index++;
    }

    return accumulator;

}

let arr = [1, 2, 3];

const sum = (accumulator, current, index, arr) => {
    return accumulator + current;
}

console.log(arr.customReduce(sum, 1));
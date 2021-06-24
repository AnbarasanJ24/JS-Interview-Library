//  Reduce Function 
//  If we are not passing initial value then it will take first element as accumulator and starts with second element 

let arr = [];
const sum = (accumulator, current, index, arr) => {
    return accumulator + current;
}

// let result = arr.reduce(sum, 0);


// Error Cases 
// arr.reduce() -> Call reduce without anyt call back will gice undefined function error 
// [].reduce(sum) -> Call reduce on empty array with no initial value -> error "Reduce of empty array with no initial value"

// Corner cases
// [].reduce(sum,1) -> call reduce on empty array with initial value then initial value is the output 

Array.prototype.customReduce = function (callback, initialValue) {

    // this -> called array
    if (this === null || this === undefined) {
        throw new TypeError(`Array.prototype.customReduce called on null or undefined`);
    }

    if (!callback || typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }
    console.log("length", arguments, initialValue)

    if (!this.length) {
        if (arguments.length < 2) {
            throw new TypeError(`Reduce called on Empty array with no initial value`);
        } else if (arguments.length === 2) {
            return initialValue;
        }
    }



}

console.log(arr.customReduce(sum, 1));
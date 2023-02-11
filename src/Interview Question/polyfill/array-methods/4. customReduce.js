//  Reduce Function 
//  If we are not passing initial value then it will take first element as accumulator and starts with second element 

// Error Cases 
// arr.reduce() -> Call reduce without any call back will give undefined function error 
// [].reduce(sum) -> Call reduce on empty array with no initial value -> error "Reduce of empty array with no initial value"

// Corner casess
// [].reduce(sum,1) -> call reduce on empty array with initial value then initial value is the output 

// Working case
// Check the passed value is array or not and also get its first arg to check whether it is function or not 
// Check empty array and initial value is not passed, then throw a error 
// check array as one element if not take it from initial value 
// loop through the other value and store the result in accumulator
Array.prototype.customReduce = function (...args) {
    let callBack = args[0];
    if (typeof callBack !== 'function') {
        throw new Error('Invalid Function')
    }

    let source = this;
    if (source.length === 0 && args.length === 1) {
        throw new Error('No Initial Value and Array is empty')
    }

    let accmulator = args.length === 1 ? source[0] : args[1];
    let startIndex = args.length === 1 ? 1 : 0;
    
    for (let index = startIndex; index < source.length; index++) {
        let currentValue = source[index];
        accmulator = callBack(accmulator, currentValue, index, source);
    }

    return accmulator;

}
const numbers = [1,2,3,4];
const sum = (acc, num) => num + acc;
console.log(numbers.customReduce(sum, 0))
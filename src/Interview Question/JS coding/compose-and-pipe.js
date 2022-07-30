/**
 * Use case: Sometimes we call a function and it returns a value. By using that returned value will call another function. 
 * So here first function output will be used as a input for second function.
 * Only difference between compose and pipe => compose (right to left), pipe (left to right)
 * In angular, we use pipe to process the input data with multiple function and finally return the result 
 */

/**
 * Approach: we need to loop through the function and get its result
 * First with looping the function and store its result in a variable
 * On looping, For first function call the function input and going forward call the previous function result
 * For compose , we need to loop right to left, so reverse the function array 
 */


const compose1 = (...functions) => {
    // Reversing to run from right to left
    let reverseFn = functions.reverse();
    return (args) => {
        return reverseFn.reduce((acc, fn) => {fn.call(this, acc)}, args);
    }
}

const pipe = (...functions)=>{
    return (args)=>{
        return functions.reduce((acc, fn)=> fn.call(this, acc), args);
    }
}

// Another Variation
const compose = (...functions) => {
    let fnLength = functions.length;
    let result;
    return function (...args) {
        for (let i = fnLength - 1; i >= 0; i--) {
            let fn = functions[i]; 
            result = (i == (fnLength - 1)) ? fn(...args) : fn(result);
        }
        return result;
    }
}

const add5 = num => num + 5;
const multiplyBy5 = num => num * 5;
// const multiplyAndAdd = compose1(add5, multiplyBy5);
const multiplyAndAdd = pipe(add5, multiplyBy5);
console.log(multiplyAndAdd(5));
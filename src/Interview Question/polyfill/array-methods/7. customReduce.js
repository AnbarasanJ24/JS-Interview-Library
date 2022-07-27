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
Array.prototype.myReduce = function(...args) {
    let arr = this; 
    let argumentsLen = arguments.length 
    if(arr.length === 0 && argumentsLen === 1){
        throw new TypeError('Reduce of empty array with no initial value')
    }
  
    let accumulator = argumentsLen === 1 ? arr[0] : initailValue;
    let index = argumentsLen === 1 ? 1 : 0;
  
    for(let i = index; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i], i, arr)
    }
    return accumulator;
}

let arr = [1, 2, 3];

const sum = (accumulator, current, index, arr) => {
    return accumulator + current;
}

console.log(arr.customReduce(sum, 1));
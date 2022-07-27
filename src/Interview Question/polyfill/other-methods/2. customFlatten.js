// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
// function flatten(inputArray) => output [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Steps
// 1. we need to return the result as Array
// 2. Loop the array and check if the element is Array or not
// 3. If it is  Array then recusrively call the method again else add it to the result

let inputArray = [];

Array.prototype.flatten =  function(){
    let flattenResult = [];
    let source = this;

    for(let i = 0; i < source.length ; i++ ){
        let element = source[i];

        if(Array.isArray(element)){
            flattenResult = flattenResult.concat(this.flatten.call(element));
        }else{
            flattenResult.push(element);
        }
    }

    return flattenResult;
}

console.log(inputArray.flatten())


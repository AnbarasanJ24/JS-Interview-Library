// 1. Auxiliary space
    // Space required by the algorithm exculding input 
// 2. Space complexity 
    // It means space required for both alogorithm and input
    // usually we tell space complexity but auxiliary space matters
// 3. Rule of Thumb 
    // Most primitives (boolean, number, null, undefined) are constant 
    // String, Array are O(n) means its length and Object (number of keys) is O(n)


function doubleUp(arr){
    let newArr = [];
    for(let v of arr){
        newArr.push(v*2);
    }
    return newArr;
}


// Use case : We can solve the collect some value problem using helper method or pure function
let arr = [1, 2, 3, 4, 5];

function collectAllOdds(arr) {
    let result = [];

    if (arr.length === 0)
        return result;

    if (arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }

    result = result.concat(collectAllOdds(arr.slice(1)))
    return result;
}

console.log(collectAllOdds(arr))

// Pure function tips
    // Use slice, concat & spread operator not to mutate the original array 
    // Use slice, substr & substring to make copies of string 
    // Object.assign or spread operator to make new object copies 
// Use case : When we need to collect some value in  array or string or object we cn use this helper method 

// General Syntax
function outer() {
    let outerScopedVaribale = [];
    function helper() {
        // Base case
        // helper function call with different input 
    }
    helper();
    return outerScopedVaribale;
}

// Use case : In a given array pick only even numbers
let arr = [1, 2, 3, 4, 5]
function pickEvenNumbers(arr) {
    let result = [];

    function helper(helperInput) {

        if (helperInput.length === 0)
            return;
        if (helperInput[0] % 2 === 0)
            result.push(arr[0])

        helper(helperInput.slice(1))
    }

    helper(arr)
    return result;
}
console.log(pickNumbers(arr))
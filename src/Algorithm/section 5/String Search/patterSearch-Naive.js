// Search a given pattern against the longer string 
let str = "wowomgzomg";
let pattern = "omg";

// Naive solution
const searchPattern = (str, pattern) => {
    // Base Case 
    if (str === null || str === ' ' || pattern === null || pattern === ' ')
        return 0;

    // Initialize counter 
    let counter = 0

    // Loop through the longerstring 
    // Loop through the pattern 
    // if longer string letter matches with pattern letter
    // increase longer string index by 1
    // if j === pattern length -1
    // increase the counter
    for (let i = 0; i < str.length; i++) {

        let j;
        for (j = 0; j < pattern.length; j++) {
            if (str[i + j] !== pattern[j]) break;
            if (j === pattern.length - 1) counter++;
        }
    }

    // return counter 
    return counter;
}

console.log(searchPattern(str, pattern))
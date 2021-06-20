
let str1 = "aaaz"
let str2 = "aaas"

function isValidAnangram(str1, str2) {
    //In case both are empty 
    if (str1 === '' && str2 === '')
        return true;
    // In case of different length or any of string is null 
    if (str1 === '' || str2 === '' || str1 === null || str2 === null || str1.length != str2.length)
        return false;

    //Create frequency counter object
    let freqCounter1 = {};

    //loop array 1 and create frequency counter object 1
    for (let val of str1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    // Loop over the second string
    // If key is not present then return false
    // If key present then reduce it to -1
    for (let key of str2) {
        if (!freqCounter1[key])
            return false;
        else
            freqCounter1[key] -= 1;
    }

    return true;
    // Return true
}

console.log(isValidAnangram(str1, str2));
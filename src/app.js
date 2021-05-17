let arr1 = [1, 2, 3]
let arr2 = [1, 4, 9]

function same(arr1, arr2) {
    //Length check 
    if (arr1 === null || arr2 === null || arr1.length != arr2.length)
        return false;

    //Create frequency object for both  arrays
    let freqCounter1 = {};
    let freqCounter2 = {};

    //loop array 1 and create frequency counter object 1
    //loop array 2 and create frequency counter object 2
    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }


    // Loop over the frequency counter object 1
    // If key **2 not present in object 2 -> false
    // If first object key Freq != Second object key freq -> false 
    for (let key in freqCounter1) {
        if (!(key ** 2 in freqCounter2))
            return false;
        if (freqCounter2[key ** 2] != freqCounter1[key])
            return false;
    }

    return true;
    // Return true
}

console.log(same(arr1, arr2));
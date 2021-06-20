// In radix sort, first create a 10 buckets to arrange numbers from 0 to 9
// Then start traversing the number from right side and based on each number keep it in respective buckets
// If it is single digit 4 then for considering second number it will 04 so it will come under 0 bucket
// Continue the process untill reach the largestl digit element in the array 

//  we need helper function like get digit which takes number and position and return digit at that position 
//  digit count function will take a number and return number of digits

// Time complexity 
// Best, average, worst -> O (N * MaxDigitCount)


const getDigit = (n, i) => {
    // Number divide by 10 will remove last digit 
    // Number modulo by 10 will give last digit

    // First remove the number of digit using / then get the last digit using %
    return Math.floor(Math.abs(n) / (10 ** i)) % 10;
}

const digitCount = (num) => {
    // corner case
    if (num === 0) return 1;

    // log 10 + 1 will give digit count of number (Floor and abs will make it work properly)
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const maxDigits = (arr) => {
    return arr.reduce((max, current) => {

        // If anything is greater than max then update the max with current 
        if (current > max) {
            max = current;
        }
        return max;
    }, arr[0])  // Consider first value is maximum
}


const radixSort = (arr) => {

    // Corner case
    if (arr === null || arr.length === 0)
        return [];

    // Get the max digit using helper
    const maxDigit = digitCount(maxDigits(arr));

    // Run a loop of max number digits & create 10 buckets 
    // Run another loop of the numbers 
    // Get the digit from right based on left side of each number & Place the number in the bucket based on digit
    // Flatten the array and make it as original array
    for (let i = 0; i < maxDigit; i++) {
        let bucket = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            bucket[digit].push(arr[j]);
        }
        arr = [].concat(...bucket);
    }

    // return the sorted array
    return arr;

}
let arr = [11, 23, 34123, 456112222, 5678, 65, 1, 234]
console.log(radixSort(arr));
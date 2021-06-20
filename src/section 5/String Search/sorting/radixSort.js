// In radix sort, first create a 10 buckets to arrange numbers from 0 to 9
// Then start traversing the number from right side and based on each number keep it in respective buckets
// If it is single digit 4 then for considering second number it will 04 so it will come under 0 bucket
// Continue the process untill reach the largestl digit element in the array 

//  we need helper function like get digit which takes number and position and return digit at that position 
//  digit count function will take a number and return number of digits


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


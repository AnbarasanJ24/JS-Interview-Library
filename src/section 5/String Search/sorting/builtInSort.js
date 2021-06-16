//  Built in sort use string unicode of each item to sort, so string values are properly sorted 
//  But numbers are not sorted in proper order

let arr = ["Suganya", "Anbu", "Ram", "Raja"]
let arr1 = [34, 1, 4, 55, 4]

// Compartor function 
// JS accepts compartor function which takes a and b as parameter 
// If the return value is -1 then a comes before b
// If the return value is 1 then a comes after b
// If the return value is 0 then both are same  

// For Numbers  -> Ascending num1-num2 & Descending num2-num1
// For String -> Based on length str1.length - str2.length and comparing using str1.localeCompare(str2)

const compare = (num1, num2) => {
    return num1 - num2;
}

const compare = (num1, num2) => {
    return num2 - num1;
}

const compare = (str1, str2) => {
    return str1.length - str2.length;
}

const compare = (str1, str2) => {
    return str1.localeCompare(str2);
}
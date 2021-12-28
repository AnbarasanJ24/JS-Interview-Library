// Different Array Methods

// concat() [Merge Two Arrays]
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); // [1,2,3,4,5,6]


// join() [Convert into string with seperator]
const arr1 = [1, 2, 3];
console.log(arr1.join(',')); // 1,2,3


// indexOf() [Find the element and return its index]
const arr = [1, 2, 3];
console.log(arr.indexOf(1)); // 0


// lastIndexOf() [Find the last element and return its index]
const arr = [1, 2, 3, 1];
console.log(arr.lastIndexOf(1)); // 3


// sort() & reverse() [Sort in ascending and desending order]
const arr = [5, 4, 2, 1, 8, 5, 6]
console.log("Sorting", arr.sort());
console.log("Reverser Sort", arr.reverse());


// ValueOf [Return primitive value from Object]
const num = Number(5);
console.log(num.valueOf()); // 5


// toString() [convert the array into string]
const arr = [1, 2, 3, 1];
console.log(arr.toString()); 1, 2, 3, 1


// slice(start index, end index) [Return the sliced item with start and end index as new array] 
// [Exclude last index value] [Negative value will start slice from end]
const arr = [1, 2, 3, 1, 5, 4, 2, 1, 8, 5, 6];
console.log(arr.slice(1));        // [2, 3, 1, 5, 4, 2, 1, 8, 5, 6]
console.log(arr.slice(5, 9));     // [4, 2, 1, 8]
console.log(arr.slice(-3));       // [8, 5, 6]
console.log(arr.slice(5, -4));    // [4,2]


// splice(start,deletecount,item1,item2) [we can add, remove elements in the array]
// [Modify the existing array]
const arr = [1, 2, 3, 1];
arr.splice(1, 1, "Anbu"); //[ 1, 'Anbu', 3, 1 ]
arr.splice(1, 5); // [1]
console.log(arr); 
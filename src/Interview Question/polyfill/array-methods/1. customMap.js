/**
 * The map() method returns a new array, where it will call a callback function on each value
 * const numbers = [1,2,3];
 * const result = numbers.map(num => num *2)
 * o/p => [2,4,6]
 */

// *** Learning Map prototype is enough to solve filter , foreach, find with slight modification ***

// Notes
// It will return an array
// It will call a function on every value in the array 
// Before call the function check element exits in array 
// Each function will take three parameters, num, index, numbers

// By default Map callback function gets its callback value and thisArgs (context)

Array.prototype.customeMap = function(callback, thisArgs) {
    if(typeof callback != 'function'){
      throw new Error('Invalid Funtion');
    }
  
    let sourceArray = this;
    let length = this.length;
    let result = new Array(length);
  
    for(let index = 0 ; index < length ; index++){
      if(index in sourceArray){
        result[index] = callback.call(thisArgs, sourceArray[index], index, sourceArray)
      }
    }
  
    return result;
  }
  

const numbers = [1, 2, 3];
const result = numbers.customeMap(num => num * 2)
console.log(result);











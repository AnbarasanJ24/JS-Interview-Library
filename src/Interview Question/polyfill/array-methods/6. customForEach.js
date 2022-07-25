// It is same like map but it will not return new array just call the calback for each value
// Foreach will take callback function as argument and call the same for each value
// callback function takes current Item, index, arr as parameter
// Need to check element exists in the array or not then call the callback function


Array.prototype.customForEach = function(callbackFn){
    let source =  this;
    for(let index = 0; index < source.length ;index++){
        if(index in soureArray){
            callbackFn.call(source, source[index], index, source);
        }
    }
}


const nums = [1,2,3,4];
nums.customForEach((num,index,nums) => console.log(num, index, nums))



// Find : It is more like Filter
Array.prototype.myFind = function(callback) {
    let arr = this;

    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return arr[i]
        }
    }

    return -1;
}
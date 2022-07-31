/**
 * Deep Clone - when we use direct assignment to take a clone, both object point to same reference (Example Below)
 * so on comparing this will give true and also change in one object will affect the other object
 * By using Destructing or Object assign, it will clone only immediate keys. On comparing the reference it will give false 
 * But mutation (change) in nested keys value (address.state) in below exmaple will result in change the value in both objects 
 */

// https://www.youtube.com/watch?v=M7CBgdN58UE&t=688s

let user = {
    username : 'Anbarasan',
    age : 25,
    address : {
        state : 'Pondicherry',
        pincode : '605004'
    },
    interests : ['Reading blogs', 'Creating CSS shapes']
}
// Direct Assignment clone
let clonedUser = user;
console.log(user === clonedUser); //True

// De-structing
let destructClone = {...user};
let assignClone = Object.assign({}, user);
console.log(user === destructClone); //False
console.log(user === assignClone); //False
user.address.pincode = '605005'; //Reflect in both objects

// We can solve this using JSON stringify but it will take more time for execution
let clonedUser1 = JSON.parse(JSON.stringify(user))

/**
 * Approach - Based on the Input, Deepclone will return a object or Array
 * Here primitive types like number, boolean, string will be returned before the loop
 * When the value is object or array, we need to loop and call its value recursively
 * For in for array will be key as index and value as array[index]
 */

const deepClone = (input)=>{
    let result = Array.isArray(input) ? [] : {};

    if(typeof input != 'object') return input;
    
    for(let key in input){
        result[key] = deepClone(input[key]);
    }
    return result;
}

let deepClonedObj = deepClone(user);
user.address.pincode = '605005';
user.interests[1] = 'Anbu'
console.log("Deepclone", deepClonedObj);
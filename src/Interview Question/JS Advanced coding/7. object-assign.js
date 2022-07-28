/**
 * Object assign : It is used to take a clone of a object.
 * It takes target and source object, it will take source object [key:value] and place it in target object 
 * It will take the copy of immediate keys(shallow copy) and will not support deepclone
 */

let user = {
    username : 'Anbarasan',
    age : 25
}

let clonedUser = {...user} //One Way
let clonedUser1 = Object.assign({}, user) //object assign way 
//clonedUser {username : 'Anbarasan' , age : 25}

/**
 * Check the null, undefined value of target and also make target object in case of primitive value
 * Loop through the sources and define the proprties with object descriptors (writable, enumerable, configurable)
 * finally return the target
 */

 function objectAssign(target, ...sources) {
  
    if(target === null || target === undefined){
      throw new Error('');
    }
    if(typeof target !== 'object') return Object(target);
  
    sources.forEach(value =>{
      if(value !== null && value !== undefined){
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(value));
      }
    })
    
    return target;
  }
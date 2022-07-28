/**
 * Promisify: Convert a function to a promise and also attach a callback to it 
 * It will take a function, return a function that wrap a callback function 
 * On calling the wrapped function, it will return a Promise 
 * 
 * The callback function will be error first approach, so it will handle error first, use reject to handle it 
 * second it will handle the data, using resolve handle it.
 */


 function promisify(func) {
  
    return function(...args){
  
      return new Promise((resolve, reject)=>{
        const callBack = (error, data)=>{
          if(error){
            reject(error)
          }else{
            resolve(data)
          }
        };
        func.call(this, ...args, callBack);
      })
    }
  }
  
const promisedFunc = promisify(func)

promisedFunc().then((data) => {
  // handles data
}).catch((error) => {
  // handles error
})
// Promise Race
// It will take array of promises and return a promise which resolved or reject first

// Approach 
// create a function which return a promise, Loop through the promises
// try resolve the promise and also catch it errors
// Whichever is resolved or reject first will be returned


 function race(promises) {
    return new Promise((resolve, reject)=>{

      if(!promises.length) resolve(promises);

      promises.forEach(promise =>{
        Promise.resolve(promise)
        .then(res=>resolve(res))
        .catch(err =>  reject(err));
      })
    })
  }
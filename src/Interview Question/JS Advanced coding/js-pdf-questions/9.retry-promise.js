// Implement a function in JavaScript that retries promises N number of
// times with a delay between each call.

// Steps 
// 1. Create a function which takes delay time and return a promise 
// 2. Call the function if the same error out then check the retries 
// 3. If retries exists then give a delay and call the same function recursively 

const delay = ms => new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(), ms)
})

const retryPromise = async (fn, retry, interval, errormessage)=>{
    try{
        return await fn();
    }catch(err){
        if(retry <= 0) return Promise.reject(errormessage);

        console.log("Retrying....!")
        await delay(interval);

        return retryPromise(fn, retry -1, interval, errormessage)
    }
}

const displayName = () => new Promise((resolve, reject)=> reject('Failed to pull data from server') );

console.log(retryPromise(displayName, 3, 3000, 'Display Name API Error'))
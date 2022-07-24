/*
    It takes array of promises and return a promise that resolve a array of results 
    Once all the promise is resolved then return the result
    If any one of the promise is reject then it will return error
 */

function task(time){

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(time)
        }, time);
    })
}

const promises = [task(1000), task(5000), task(3000)];

function myPromiseAll(promises) {
    let result = [];
    let promiseCompleted = 0;
  
    return new Promise((resolve, reject)=>{
  
      if(!promises.length){
        return resolve(promises);
      }
  
      promises.forEach((promise,index) =>{
        Promise.resolve(promise)
          .then(value =>{
            result[index] = value;
            promiseCompleted++;
  
            if(promiseCompleted === promises.length){
              resolve(result);
            }
          })
          .catch(err => reject(err))
      })
    })
  }


//run promise.all
myPromiseAll(taskList)
    .then(results => {
        console.log("got results", results)
    })
    .catch(console.error)


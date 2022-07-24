/**
 * Promise All settled - Takes a array of promises and return a promise that resolve array of object 
 * In case of promise all, If any one of the promise is rejected then it will throw the error 
 * But when we use promise settled, even there is a error it will  not stop. It will execute all the promise and return the array 
 */

const task = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(timeout)
        }, timeout);
    })
}

const taskFailure = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(timeout)
        }, timeout);
    })
}

const promises = [task(1000), task(2000), taskFailure(3000), taskFailure(1000)];

const allSettlted = (promises) => {

    let result = [];
    let promiseCompleted = 0;

    return new Promise((resolve, reject) => {

        if (!promises.length) resolve(promises);

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value)=>{
                    result[index] = {status : 'fulfilled', value: value};
                    promiseCompleted++;

                    if(promiseCompleted === promises.length){
                        resolve(result)
                    }
                })
                .catch(err => {
                    result[index] = {status : 'rejected', reason : err}
                    promiseCompleted++;
                    if(promiseCompleted === promises.length){
                        resolve(result)
                    }
                })
        });
    })
}

allSettlted(promises)
    .then(value => console.log(values))
    .catch(err => console.log(err));
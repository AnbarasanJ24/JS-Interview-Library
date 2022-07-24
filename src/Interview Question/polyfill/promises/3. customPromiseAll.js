function task(time){

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(time)
        }, time);
    })
}

const taskList = [task(1000), task(5000), task(3000)];

function myPromiseAll(promises) {

    let result = [];
    let promiseCompleted = 0;

    return new Promise((resolve, reject) => {

        promises.forEach((promise, index) => {
            promise
                .then((value) => {
                    result[index]= value;
                    promiseCompleted++;

                    if(promiseCompleted === promises.length){
                        resolve(result);
                    }
                })
                .catch(err => reject(err));
        });
    })
}


//run promise.all
myPromiseAll(taskList)
    .then(results => {
        console.log("got results", results)
    })
    .catch(console.error)
// General Working of Promise 

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 5));

// To convert any function to promise then return promise instance
// function add(a, b) {
//     return new Promise((resolve, reject) => {
//         if (a < 0 || b < 0) {
//             reject(new Error('Number should not be negative!'));
//             return;
//         }
//         resolve(a + b);
//     })
// }

// add(5, 5)
//     .then(response => {
//         console.log("Addition of two numbers is ", response);
//     })
//     .catch(error => {
//         console.log("Error occured");
//         console.log(error);
//     })


// // Create a function which wait for 1sec

// function wait(ms) {
//     return new Promise((resolve, reject) => {

//         if (ms <= 0) {
//             reject(new Error('Can"t wait for given seconds'));
//             return;
//         }
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     })
// }

// wait(0)
//     .then(response => console.log(`The function is waited for ${response} seconds`))
//     .catch(error => console.log(error))


// Create a custom Promise

// we need to create custome promise step by step 
// Need to have custom fetch so that we can return our custom promise
// Promise class will be created with callback function

const myFetch = () => {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            reject('Promise Resolved')
        }, 1000);
    })
}

class MyPromise {
    constructor(executorFunction) {
        this.promiseChain = [];
        this.handleError = () => {};
        this.onResolve = this.onResolve.bind(this);
        this.onReject = this.onReject.bind(this);
        executorFunction(this.onResolve, this.onReject);
    }

    then(handleSuccess){
        this.promiseChain.push(handleSuccess);
        return this;
    }

    catch(handleError){
        this.handleError = handleError;
    }

    onResolve(value){

        let currentValue = value;
        try{
            this.promiseChain.forEach(promise =>{
                currentValue = promise(currentValue);
            })
        }catch(err){
            this.onReject(err);
        }
    }

    onReject(error){
        this.handleError(error);
    }

    
}

myFetch()
    .then(response => console.log(response))
    .catch(err => console.log(err));
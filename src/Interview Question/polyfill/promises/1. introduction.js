/*
    Promise - Its a object which carries either a success or failure value of a asynchronous operation 
    It can be pending (when created), fulfilled - operation completed successfully, rejected - operation failed and settled 
    By using then method and get the value then the promise will be settled
*/

// General Working of Promise 

function add(a, b) {
    return a + b;
}

console.log(add(5, 5));

// To convert any function to promise then return promise instance
function add(a, b) {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject(new Error('Number should not be negative!'));
            return;
        }
        resolve(a + b);
    })
}

add(5, 5)
    .then(response => {
        console.log("Addition of two numbers is ", response);
    })
    .catch(error => {
        console.log("Error occured");
        console.log(error);
    })
    .finally(()=>{
        console.log("Finally")
    })


// Create a function which wait for 1sec

function wait(ms) {
    return new Promise((resolve, reject) => {

        if (ms <= 0) {
            reject(new Error('Can"t wait for given seconds'));
            return;
        }
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

wait(0)
    .then(response => console.log(`The function is waited for ${response} seconds`))
    .catch(error => console.log(error))
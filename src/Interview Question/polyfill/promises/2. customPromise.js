
/*
    * Create a custom Promise
    * we need to create custom promise step by step 
    * Need to have custom fetch so that we can return our custom promise
    * Promise class will be created with callback function
*/

const myFetch = () => {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            reject('Promise Resolved')
        }, 1000);
    })
}


    /*
        * Promise will take a callback function i.e executor function and it should have access to resolve and reject method
        * On calling the callback, the user get access to resolve and reject methods
        * we dont know in which context user call the promise, so we can bind resolve, reject to current context using bind
    */
class MyPromise {
    constructor(executorFunction) {
        this.promiseChain = [];
        this.handleError = () => { };
        this.onResolve = this.onResolve.bind(this);
        this.onReject = this.onReject.bind(this);
        executorFunction(this.onResolve, this.onReject);
    }

    /*
        * Promise has then and catch methods, then will handle the sucess case, since it will take multiple value create a promise chain
        * On each then method we will push the value to the promise chain to handle once it is resolved.
        * All the then method will be processed once we call resolve method on promise 
        * Since we need to chain the then method, by return this keyword will have all access to the current object instance 
        * For catch the error, will maintain a variable which takes the error callback function
     */
    then(handleSuccess) {
        this.promiseChain.push(handleSuccess);
        return this;
    }

    catch(handleError) {
        this.handleError = handleError;
    }

    /*
        * On resolve, it take a value and resolve it. At the same time we need to track the previous value to pass to the next then method.
        * Then method carries the call back function, we need to invoke it one by one
        * on load current value will be passed from resolve function but post that first then method output will be passed to second then input
        * In case of any error while calling the function, we will catch it will its value to Reject method
        * Reject method just assign user passed error call back function to handle error method
    */
    onResolve(value) {

        let currentValue = value;
        try {
            this.promiseChain.forEach(promise => {
                currentValue = promise(currentValue);
            })
        } catch (err) {
            this.onReject(err);
        }
    }

    onReject(error) {
        this.handleError(error);
    }


}

myFetch()
    .then(response => console.log(response))
    .catch(err => console.log(err));
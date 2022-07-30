// Throttling - It will call the function only once during the given limit
// If the user click the button multiple times in range of 0 to 100ms
// Each click will make a API function, we dont want to take all function so by throtlling it will take only one function during the limit
// We need to decide when we should call a function and when we should not call it

// Will keep a boolean to decide the function needs to be called or not 
// On first time, boolean will be true, call the function immediately 
// Next time the function should be called after the delay, so make the boolean false after first call
// Using set timeout will delay the time and once it expries will make the boolean true 
// since it is true, the function will be called again 


// https://bigfrontend.dev/problem/implement-basic-throttle

// Function used to Mimic like API Call
const getData = ()=>{
    console.log('Calling the API');
}

// Throttle will take a function and delay and return a new function
function throttle(func, wait) {
    let isCallable = true;
    let lastArgs;
    return function(...args){
        if(isCallable) {
            func.apply(this, args);
            isCallable = false;
            setTimeout(() => {
                isCallable = true;
                if(lastArgs){
                  func.apply(this,lastArgs)
                }
            }, wait);
        }else{
          lastArgs = args;
        }
    }
}
const throttledFunction = throttle(getData, 500);
window.addEventListener('click', throttledFunction);
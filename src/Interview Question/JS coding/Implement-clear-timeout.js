/**
 * Set timeout will take a callback function and timer, Once the timer is finished it will call the function
 * Same time it will return a Id, By using that we can clear it using clear Timeout
 * Why we need to clear? If its not cleared then it will stay in the memory and lead to memory leak 
 */

const id = setTimeout(() => {
    console.log("Understanding Set Timeout")
}, 5000);

console.log(id);

// BFE Link : https://bigfrontend.dev/problem/implement-clearAllTimeout

/**
 * To implement clear All timeout, First we need all timeout IDs
 * We have to call setTimeout to get the Id and push it to timeouts array
 * Iterate the timeouts array, call the clear timeout with Id
 * Now we need to overide the existing set timeout, because for every time new set timeout should push if to timeouts Id array
 * To keep the original settimeout, we can store it in a variable 
 * Reference: https://www.youtube.com/watch?v=rs2_yWOqsUk
 */


/**
 * cancel all timer from window.setTimeout
 */
 function clearAllTimeout() {
    window.__timeOuts.forEach(el => clearTimeout(el))
  }
  
  window.__timeOuts = [];
  const originalSetTimeout = window.setTimeout;
  
  window.setTimeout = (...args) => {
  
    const currentId = originalSetTimeout(...args);
    window.__timeOuts.push(currentId);
  
    return currentId;
  }
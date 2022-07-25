/*
 * Memoize: It will take a function and return memoized version of it
   The returned function has cache to store and retrive the result
   create a cache and check the function argument present in it or not
   we can take argumets either using ...args or argument keyword
   If it is already cached then return cache value else save it in the cache
 */

// Here there is no ...args passed in line 12, so alternative arguments keywords (same like ...args)
function memoize(callbackFn){
  let cache = {};
  return function(){
    let currentKey = JSON.stringify(arguments);
    if(cache[currentKey]){
      return cache[currentKey];
    }
    cache[currentKey] = callbackFn.apply(this, arguments);
    return cache[currentKey];
  }
}

function factorial(n) {
    if(n === 0 || n === 1) {
      return 1
    }
    return factorial(n-1) * n; 
 }

 const memoizedFactorial = memoize(factorial);
 console.time('First');
 console.log( memoizedFactorial(10));
 console.timeEnd('First');
 console.time('Second');
 console.log( memoizedFactorial(10));
 console.timeEnd('Second');
 console.time('Third');
 console.log( memoizedFactorial(10));
 console.timeEnd('Third');
 

//  BFE Version
function memo(func, resolver) {
  let cache = {};
  return function(...args){
    // Take either ...args or arguments
    // on calling the resolver it will give a key else create own key using join method
    let currentKey = resolver ?resolver(...args) : args.join('_');
    if(currentKey in cache) return cache[currentKey];

    cache[currentKey] = func.call(this, ...args);
    return cache[currentKey];
  }
}
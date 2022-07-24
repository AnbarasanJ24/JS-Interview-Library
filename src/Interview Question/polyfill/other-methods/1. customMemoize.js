// It will take a function and return memoized version of it
// The input and output will be function but output with more power
// create a cache and check the function argument present in it or not
// If it is already cached then return cache value else save it in the cache

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
 
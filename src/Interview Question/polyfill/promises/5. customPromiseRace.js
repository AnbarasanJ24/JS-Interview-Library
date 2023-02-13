// Promise Race
// It will take array of promises and return a promise which resolved or reject first

// Approach 
// create a function which return a promise, Loop through the promises
// try resolve the promise and also catch it errors
// Whichever is resolved or reject first will be returned


const successTask = time => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(time)
      }, time)
  })
}


const errorTask = time => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject(time)
      }, time)
  })
}

const promises = [successTask(300), successTask(200), errorTask(100)];


function promiseRace(promises) {

  return new Promise((resolve, reject) => {

      if (!promises.length) resolve(promises);

      promises.forEach(promise => {
          Promise.resolve(promise)
              .then(value => resolve(value))
              .catch(err => reject(err))
      });
  })
}

promiseRace(promises)
  .then(value => console.log(value))
  .catch(err => console.log("Error",err))
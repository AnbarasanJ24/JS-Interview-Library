// https://bigfrontend.dev/problem/implement-curry

// Currying
// In order to call a function, we need to provide all argumments to get the result
// But in case of currying, we will tranform a function into partial function
// That means, it will take argumets whenever user provide at different times
// Once it gets all the argumets it will call the function and return value

// func.length give the given function arguments length 

// Check the arguments length is equal to or greater than given function argument length
// If so call the give function 
// If not, keep the arguments and return a curried function 

const log = (date, time, message) => {
    return `${date}_${time}_${message}`
}

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

const curriedLog = curry(log);
// Case 1
// console.log(curriedLog("28-04-2022", 10.55, "Testing"));

//Case 2
const loggedTillDate = curriedLog("28-04-2022");
console.log(loggedTillDate(10.55, "Testing"));

//Case 3
const loggedTillTime = curriedLog("28-04-2022", 10.55);
console.log(loggedTillTime("Testing"));;



// Create a sum(), which makes following possible
// Here sum function will call another function and that function will again call another function
// Once the function doesn't have any arguments then return the stored value 
// Since we are calling the function again and agian, we can solve it easily by recursion
// Just check the function contains arguments if not that is our base condition so return the stored value i.e num (parent function argument) 
// If there are two values, then recursively call the sum function 


function sum(num) {
    const sumInner = (num2) => {
      if(!num2) {
        return num;
      } else {
        return sum(num + num2);
      }
    }
    sumInner.valueOf = () => num;
    sumInner.toString = () => num;
    return sumInner
  }

const sum1 = sum(1)
sum1(2) == 3 // true
sum1(3) == 4 // true
sum(1)(2)(3) == 6 // true
sum(5)(-1)(2) == 6 // true
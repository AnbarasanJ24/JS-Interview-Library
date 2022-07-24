// https://bigfrontend.dev/problem/implement-curry

// Currying
// In order to call a function, we need to provide all argumments to get the result
// But in case of currying, we will tranform a function into partial function
// That means, it will take argumets whenever user provide at different times
// Once it gets all the argumets it will call the function and return value

// func.length give the given function arguments length 

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

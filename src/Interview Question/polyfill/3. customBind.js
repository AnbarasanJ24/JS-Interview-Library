// Bind Function
// When we need to reuse or borrow the function and at the same time it shoule be called not immediately then bind will be used
// We can call the function, whenever it is required

// Usecase : Create a custom bind function which takes context reference and parameter and return a new function 
// Corner and working case
// 1. Function should take this reference and return new function
// 2. Function should take arguments and return with new function
// 3. Function should take arguments form retutrned function too


// Function.prototype.customBind = function (...args) {
//     let calledFunction = this;
//     let context = args[0]; //To get context 
//     let otherParms = args.slice(1); // Remove the context and return 

//     return function (...args2) {
//         let params = otherParms.concat(args2);
//         calledFunction.apply(context, params);
//     }
// }

Function.prototype.customBind = function (context, ...args) {
    context.calledFunction = this;

    return function (...args2) {
        context.calledFunction(...args, ...args2);
    }
}
let user = {
    firstName: "Anbarasan",
    lastName: "J"
}
let user1 = {
    firstName: "Ram",
    lastName: "Kumar"
}

let printFullName = function (hometown, age) {
    console.log(`${this.firstName} ${this.lastName} from ${hometown} of age ${age}`);
}

let cutomePrintName = printFullName.customBind(user1, "Pondicherry");
cutomePrintName(25);
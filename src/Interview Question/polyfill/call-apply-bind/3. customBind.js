// Bind Function
// When we need to reuse or borrow the function and at the same time it shoule be called not immediately then bind will be used
// We can call the function, whenever it is required

// Usecase : Create a custom bind function which takes context reference and parameter and return a new function 
// Corner and working case  same like call and apply, only difference is we need to return the function 
// On calling the returned function,we need to call the actual function and return the response 


Function.prototype.customBind = function (thisArgs, ...args) {
    let func = this;
    let context = thisArgs ?? window;
    context = Object(context);

    // Attach the function inside the context
    const identifier = Symbol('func');
    context[identifier] = func;

    return function (...args2) {
        let response = context[identifier](...args, ...args2);
        delete context[identifier];
        return response;
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
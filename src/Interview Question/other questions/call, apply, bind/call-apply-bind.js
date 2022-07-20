let user = {
    userName: "Anbu",
    lastName: "J",
}

let printFullName = function (hometown = "Unknown", age = "Unknown") {
    console.log(`${this.userName} ${this.lastName} from ${hometown} of age ${age}`)
}

let user2 = {
    userName: "Ram",
    lastName: "kumar",
}
// Call, apply - Function borrower
// Here we are borrowing printfullName function for user object (Now this will point -> user)
// In Call method we have to pass the argument individually 
printFullName.call(user, "Pondicherry", 25);

// In Apply method we have to pass the as array 
printFullName.apply(user, ["Pondicherry", 25]);

// Bind - Borrow the function and return new function out of it.
// In Bind it will copy the function for passed context and return as new function 
let printMyName = printFullName.bind(user, "Pondicherry", 25);
printMyName();

// Difference between apply,call & Bind
// call,apply will not take a copy and it will be called/Invoked immediately
// Bind will take a copy and return the function, same will be called/Invoked during required time  
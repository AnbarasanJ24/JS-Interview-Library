// Call usecase
// When we want to reuse the function or function from another object, we can borrow it using call
// It takes context and other parameters as its parameters


let anbu = {
    name: "Anbarasan",
    age: 25,

    displayname: function (address) {
        console.log(`Name ${this.name}, Age ${this.age}, Address ${address}`)
    }
}

let ram = {
    name: "Ram",
    age: 22,

}

// Steps to produce call
// 1. First attach the function needs to be called in the context, function available as this keyword
// 2. After it is attached, call the function with passed parameter

Function.prototype.customCall = function (context, ...args) {
    let ram = context;
    ram.displayName = this;

    ram.displayName(...args);
}

// anbu.displayname.call(ram);
anbu.displayname.customCall(ram, 'Pondicherry');
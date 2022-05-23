// Apply usecase
// When we want to reuse the function or function from another object, we can borrow it using Apply
// Only difference between call and apply is, In call we use comma seperated parameter 
// For apply we send parameter as array
// It takes context and array of other parameters as its parameters


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

// Steps to produce apply
// 1. First attach the function needs to be called in the context, function available as this keyword
// 2. After it is attached, call the function with passed parameter
// 3. Only difference with call method is, In call we spread the operator in the function, so it be comma seperated
// 4. Here there is no need to spread it to the function

Function.prototype.customApply = function (context, args) {
    let ram = context;
    ram.displayName = this;

    ram.displayName(args);
}

// anbu.displayname.apply(ram, ['Pondicherry']);
anbu.displayname.customApply(ram, ['Pondicherry']);
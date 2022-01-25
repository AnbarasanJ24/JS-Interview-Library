// Different object methods

// assign() - Copy keys & values from source object to target object
// we can use this method to merge to objects and cloning too (Not Deep clone)
let user = { "userName": "Anbarasan", "age": 25 };
let userDetails = Object.assign({ "address": "Pondicherry" }, user);
console.log(userDetails); //{ address: 'Pondicherry', userName: 'Anbarasan', age: 25 }

// create() - create new object using passed object as parent(base object), where methods will be re-used
let user = { "userName": "Anbarasan", "age": 25, print: function () { console.log("Name is", this.userName) } };
let newUser = Object.create(user)
newUser.userName = "Ram";

console.log(newUser); //{ "userName": "Ram"}
console.log(newUser.print()); //Name is Ram
console.log(user.print()); //Name is Anbarasan


// freeze() - we cant add, remove or change any properties in the object
// isFrozen() - return true if the object was frozen before
// In strict mode it will throw error else it will make changes
let user = { "userName": "Anbarasan", "age": 25 };
Object.freeze(user);
user.address = "Test"; // No Effect
user.age = 28 // No Effect
console.log(Object.isFrozen(user));
console.log(user) //{ userName: 'Anbarasan', age: 25 }

// Seal - we can't add or remove properties by we can modify it
// isSealed() - return true if the object was sealed before
// In strict mode it will throw error else it will make changes
let user = { "userName": "Anbarasan", "age": 25 };
Object.seal(user);
user.address = "Test"; // No Effect (Add)
delete user.userName // No Effect (Remove)
user.age = 28 // Modify it
console.log(Object.isSealed(user));
console.log(user) // { userName: 'Anbarasan', age: 28 }

// is() - Used to compare complex values
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0 / 0);              // true
Object.is(NaN, Number.NaN)        // true
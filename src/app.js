// const arrayBufferToString = require('arraybuffer-to-string')

// 0x02000000B020EC69E1BC980F21F5F4C29E4D47590095E445886AB99825DA7AB8A78A5A710A64E46DC245D2A1DA1AF95E34DEC224
// const hex = arrayBufferToString(data, 'hex')
// console.log("hex", `0x${hex.toUpperCase()}`);


// let data = [
//     2, 0, 0, 0, 176, 32, 236, 105, 225, 188, 152, 15, 33, 245, 244, 194, 158, 77, 71, 89, 0, 149, 228, 69, 136, 106, 185, 152, 37, 218, 122, 184, 167, 138, 90, 113, 10,
//     100, 228, 109, 194, 69, 210, 161, 218, 26, 249, 94, 52, 222, 194, 36
// ]
// const buffer = Buffer.from(data).toString('hex');
// console.log("Buffer", `0x${buffer.toUpperCase()}`);

// Call,Apply, Bind
// This function will call the given function with given this keyword and provided args 
// Inside call, this => given function, thisArgs - corner case 
// Create a symbol to make a unique identfier 
// Attach the function to context and call it. Return response for call, apply and return function for bind


Function.prototype.customCall = function (thisArgs, args) {
    const func = this;
    const context = thisArgs ?? window;
    context = Object(context);

    const identifier = Symbol('identifier');
    context[identifier] = func;

    return function (...args2) {
        const response = context[identifier](...args, ...args2);
        delete context[identifier];
        return response;
    }
}
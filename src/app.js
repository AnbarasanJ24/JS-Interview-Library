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
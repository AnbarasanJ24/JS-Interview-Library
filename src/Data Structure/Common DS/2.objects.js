// 1. what is Objects
// Unordered Key and Value pairs 
// 2. When to use objects
// Doesn't need to in order 
// Insert, remove, fast access O (1) & searching O (N) (searching usually happen in value side)
// 3. Methods in objects 
// Object.keys(), Object.values(), Object.entries() -> O (N) & Object.hasOwnProperty() -> O (1)
// 4. Object creation
//  we can create using object iteral or new Object() constructor (null, undefined will give empty object)

let user = {
    "userName": "Anbarasan",
    "age": 25,
    "techStack": ["Angular", "React", "JS"],
    "address": {
        "city": "Pondicherry",
        "state": "Pondicherry"
    }
}

console.log(Object.keys(user)) // [ 'userName', 'age', 'techStack', 'address' ]
console.log(Object.values(user))
// [
//     'Anbarasan',
//     25,
//     ['Angular', 'React', 'JS'],
//     { city: 'Pondicherry', state: 'Pondicherry' }
// ]
console.log(Object.entries(user))
// [
//     ['userName', 'Anbarasan'],
//     ['age', 25],
//     ['techStack', ['Angular', 'React', 'JS']],
//     ['address', { city: 'Pondicherry', state: 'Pondicherry' }]
// ]

const reverse = [
    ['userName', 'Anbarasan'],
    ['age', 25],
    ['techStack', ['Angular', 'React', 'JS']],
    ['address', { city: 'Pondicherry', state: 'Pondicherry' }]
]
const obj = Object.fromEntries(reverse);
console.log(obj);
// {
//     userName: 'Anbarasan',
//         age: 25,
//             techStack: ['Angular', 'React', 'JS'],
//                 address: { city: 'Pondicherry', state: 'Pondicherry' }
// }

console.log(user.hasOwnProperty('userName')) //true

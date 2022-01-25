// MAP - Store key, value pairs and maintain insertion order
// we can store both primitive and refernce data types as key and values
// we can store null, undefined, NaN as key in map 
const contacts = new Map() // (SG HD)
contacts.set('Jessie', { phone: "213-555-1234", address: "123 N 1st Ave" })
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', { phone: "617-555-4321", address: "321 S 2nd St" })
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

// Looping
for (const [key, value] of contacts) {
    console.log(key, value)
    // Jessie, { phone: "213-555-1234", address: "123 N 1st Ave" }
    // Hilary, { phone: "617-555-4321", address: "321 S 2nd St" }
}

for (const key of contacts.keys()) {
    console.log(key); //Jessie,Hilary
}

for (const value of contacts.values()) {
    console.log(value);
    //{ phone: "213-555-1234", address: "123 N 1st Ave" }
    // { phone: "617-555-4321", address: "321 S 2nd St" }
}
for (const [key, value] of myMap.entries()) {
    console.log(key, value)
    // Jessie, { phone: "213-555-1234", address: "123 N 1st Ave" }
    // Hilary, { phone: "617-555-4321", address: "321 S 2nd St" }
}

contacts.forEach((value, key) => console.log(key, value))

// Map with 2-D Array
const kvArray = [['key1', 'value1'], ['key2', 'value2']]
const myMap = new Map(kvArray)

// Convert map into Array 
console.log(Array.from(myMap)) // From Method
console.log([...myMap]); // Spread operator 

// Cloning (Data is not cloned only address is cloned)
const original = new Map([
    [1, 'one']
])

const clone = new Map(original)

console.log(clone.get(1))       // one
console.log(original === clone) // false (useful for shallow comparison)

// Merge
const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
])

const second = new Map([
    [1, 'uno'],
    [2, 'dos']
])

// We can merge using spread operator where map with map and map with array
// latest keys value will be taken, after merge 1 value will be new value  
const mergedMap = new Map([[...first, ...second, [1, "new Value"]]])



// SET 
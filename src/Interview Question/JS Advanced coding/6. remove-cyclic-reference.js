/**
 * Cyclic Reference : In below exmaple, anbarasan pointing to dinesh and dinesh pointing to anbarasan reference, this is cyclic
 * We can't covert this object to string using JSON stringify
 * We need to create a function which remove the cyclic reference 
 */
let users = {
    anbarasan: { name: "anbarasan", age: 25 },
    sanjeev: { name: "sanjeev", age: 23 },
    dinesh: { name: "dinesh", age: 27 }
}

users.anbarasan.friend = users.dinesh;
users.dinesh.friend = users.anbarasan;

/**
 * Approach : Basic check is if the object already contains in the weakset then ignore it else it 
 * After add the object, recursively call the added object to check for circular reference
 */

const removeCircular = (object) => {
    let visited = new WeakSet();

    const traverseItems = (data) => {
        let result = Array.isArray(data) ? [] : {};
        
        if (visited.has(data)) {
            return;
        }

        if (typeof data === 'object') {
            visited.add(data);
            for (let key in data) {
                let stagedResult = traverseItems(data[key]);
                if (stagedResult) {
                    result[key] = stagedResult;
                }
            }
        } else {
            // Primitive types
            result = data
        }
        return result;
    }

    return traverseItems(object);
}
let result = removeCircular(users)
console.log(removeCircular(users))
console.log(JSON.stringify(result))
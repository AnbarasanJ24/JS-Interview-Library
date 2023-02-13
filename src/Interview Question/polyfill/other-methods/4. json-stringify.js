/**
 * JSON - Javascript Object Notation, Its a form a data represented based on JS object syntax
 * Since this format is used to exchange data between the client and the server
 * Not only JS, all language has library to read, parse the JSON
 * JSON stringify: It will serialize the JSON Object to JSON String
 * JSON parse :  It will de-serialize the JSON String to JSON Object  
 */

/**
 * Other Notes - JSON is purely a string, contains only properties not methods
 * Only double quote is valid, it will not accept sigle quote. It will not accept . , also 
 * We can include number, string, boolean, array, object in JSON, everything is valid 
 * property should be double quoted 
 */

/** Values to except - string, boolean, number, array and object */

/**
 * Approach : Handle string, need to enclose in double quotes
 * Handle number and boolean, return the string representation
 * Handle arrays, Loop over every single value and return result
 * Handle objects, Loop over evrey key and value and return result
 */

const stringify = (obj)=>{
    if(typeof obj === 'string') return `"${obj}"`;
    if(typeof obj === 'number' || typeof obj === 'boolean') return `${obj}`;
    
    // ["1", "a", "true"]
    if(Array.isArray(obj)){
        let res = `[`;
        for (let val of obj){
            res += `${stringify(val)},`
        }
        //remove last comma
        res = `${res.substring(0, res.length -1)}]`;
        return res;
    }

    let res = `{`;
    for(let key in obj){
        res += `"${key}":${stringify(obj[key])},`
    }
    res = `${res.substring(0, res.length-1)}}`;
    return res;
}

const testOne = {a: "hello", b : 420, c : false};
const testTwo = {foo: [1, 2 , "a"], bar : {baz : true}};
const testThree = ["world", "testOne"];
const testFour = 5;
const testFive = "test";

console.log(stringify(testOne), 'Compare', JSON.stringify(testOne));
console.log(stringify(testTwo), 'Compare', JSON.stringify(testTwo));
console.log(stringify(testThree), 'Compare', JSON.stringify(testThree));
console.log(stringify(testFour), 'Compare', JSON.stringify(testFour));
console.log(stringify(testFive), 'Compare', JSON.stringify(testFive));
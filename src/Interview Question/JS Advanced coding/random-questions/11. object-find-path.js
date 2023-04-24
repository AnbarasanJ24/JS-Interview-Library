/**
 * We need to find the value for the given path in the below object
 */

var obj = {
    a: {
        b: {
            c: 12
        }
    }
};

Object.prototype.findPath = function(path){
    const accessors = path.split('.');
    const obj = this;
    let current = obj;

    for(let key of accessors){
        if(current.hasOwnProperty(key)){
            current = current[key];
        }else{
            return;
        }
    }
    return current;
}

console.log(obj.findPath('a.b.c')); // 12
console.log(obj.findPath('a.b')); // {c: 12}
console.log(obj.findPath('a.b.d')); // undefined
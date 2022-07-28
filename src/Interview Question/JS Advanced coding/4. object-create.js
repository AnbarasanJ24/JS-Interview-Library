/**
 * Object Create : Basically it create a prototype inheritance from child to parent 
 * It accpets the parent object and return a new object with a prototype inheritance reference of parent 
 * Create a object and attach its __proto__ proerty with parent 
 */

function myObjectCreate(parentProto) {
    if(typeof parentProto !== 'object' || parentProto === null){
      throw new Error('');
    }
    let obj = {};
    obj.__proto__ = parentProto;
    return obj;
  }
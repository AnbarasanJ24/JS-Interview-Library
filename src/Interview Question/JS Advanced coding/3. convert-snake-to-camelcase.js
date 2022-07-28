/**
 * Convert the Given snake case to camel case 
 * BFE: https://bigfrontend.dev/problem/convert-snake_case-to-camelCase
 */


/**
 * We need to compare two characters to check the next char is underscore or not
 * First case : Add the first char and if the first char is not _ then it sequence of character, so will move on
 * If the first char is underscore and there is second character exists then check next condition
 * Second Case: Check the second character is not underscore then we have two scenerio _is_flag (underscore can be at first or middle)
 * Check index !== 0 then it will be middlecase, so remove the underscore and made teh secon char as uppercase
 * Third Case: Since second char will be underscore, it is case of docuble underscore, so add to the result directly
 */



 function snakeToCamel(str) {
    if(!str) return '';
    let result = [];
    let index  = 0;
  
    while(index < str.length){
      let firstChar = str[index];
      result.push(firstChar);
  
      if(firstChar === '_' && str[index+1]){
          let secondChar = str[index+1];
  
          if(secondChar !== '_' && index  !== 0){
              result.pop();
              result.push(secondChar.toUpperCase());
          }else{
              result.push(secondChar);
          }
          index++;
      }
      index++;
    }
  
    return result.join('');
  }
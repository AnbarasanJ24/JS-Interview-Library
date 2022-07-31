/**
 * Convert the Given snake case to camel case 
 * BFE: https://bigfrontend.dev/problem/convert-snake_case-to-camelCase
 */


/**
 * we have four scenerios, no underscore, last underscore, middle underscore and first underscore
 * 
 * Let solve no underscore and last underscore, Just add the first char to the result then check
 * first char is not underscore then it is no underscore, Next check next element [index+1] exists for first char if not we are at last underscore 
 * In above sceberio, we need to just move on, so increase index++
 * 
 * Now solve middle case scenerio, if index !=0 and second char[index +1] is not underscore 
 * then pop the underscore and captalize the second char and push to the result
 * 
 * Now we have first underscore scenerio which is index === 0 and second char will not be underscore, simpley push the second char to the result
 */

 snakeToCamel('snake_case')  // 'snakeCase'
 snakeToCamel('is_flag_on')  // 'isFlagOn'
 snakeToCamel('is_IOS_or_Android') // 'isIOSOrAndroid'
 snakeToCamel('_first_underscore') // '_firstUnderscore'
 snakeToCamel('last_underscore_') // 'lastUnderscore_'
 snakeToCamel('_double__underscore_') // '_double__underscore_'



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
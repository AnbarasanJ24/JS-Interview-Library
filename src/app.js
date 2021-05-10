
function charCount(str){
    let result = {};
    for(let char of str){
        char = char.toLowerCase();
        if(checkValidation(char)){
            str[char] = ++str[char] || 1;
        }
    }
    return result;
}

// Slowest
function checkValidation(char){
    let result = false;
    let reg = /[a-z0-9]/;
    result = reg.test(char) ? true : false;
    return result;
}




console.log(charCount("My name is Anbu !"))
// 1. What is Algorithm
    // Process or set of steps to acomplish a certain task 
// 2. Why do we need algorithm
    // Everything will do in programming involves some algorithm
    // Foundation for being successful problem solver 
// 3. Problem solving 
    // Understand the problem
    // Explore concrete examples
    // Break it down 
    // Solve and Simply 
    // Loob back and Refractor 


// 1. Understand the problem
    // can we restate the problem in own words?
    // What are the inputs to the problem and what are the output to the problem?
    // Check we have enough information to solve the problem (All the necessary input is available or not)
// Use case 
// Write a function which take two paramter and return sum 
// 1. Implement addition
// 2. Range for Inputs i.e. how many digits or decimal or fractional number
// 3. What happens when number will be greater than 2 or one number they provide, can we return undefined or null or -1
// 4. Return value will be int, float or string 


// 2. Explore concrete examples
    // Start with simple examples(Input) & progress to more complex examples
    // Explore empty vales & Invalid values 
// Use case
// Write a function which takes string and return count of each character
// 1. For input "aa" -> {a:2} & "hello" -> {h:1,e:1,l:2,o:1}
// 2. What will happen for input with space, special character and uppercase i.e. "My name is anbu" & "Hello hi"



// 3. Break it down 
    // Make a comment or write pseudo kind of code before starting
    // Order the comments in step by step manner 
// Use Case
// Write a function which takes string and return count of each character

function charCount(str){
    // create object to return at end
    // Loop over the string and take each character
        // If the character is number/letter and it is present as key in object then add count  
        // If the character is number/letter and it is not present as key in object then set count value to 1
        // If the character is space,period then dont do anything 
    // return object at end  
}

// 4. Solve / Simply
    // In case of strucked with problem then try to solve simpler problem (simple input)
    // Find the difficulty part and park it for later 
    // Find the simplified solution for the difficulty 
    // Then try to incorporate the difficulty part into solution
// Use case
// Write a function which takes string and return count of each character
    // In this logic if there is problem with checking whether string is number or letter 
    // Then leave that part at first and start solving with space and special character
    // Once object is ready then think logic for checking the character 

function charCount(str){
    // create object to return at end
    let result = {};

    // Loop over the string and take each character
    for(let i = 0 ; i < str.length ; i++){
        let char = str[i];
        // If the character is number/letter and it is present as key in object then add count  
        if(result[char] > 0)
            result[char]++;
        // If the character is number/letter and it is not present as key in object then set count value to 1
        else
            result[char] = 1;
    }
        
    // If the character is space,period then dont do anything 
    // return object at end  
    return result;
}


// 5. Look back and refractor 
    // Check question ourself for refactoring?
        // 1. can you check the result?
        // 2. can you derive the result differently?
        // 3. can you understand it at a glance?
        // 4. can you use the result or method for any other problem?
        // 5. can you improve the performance of the code? 
        // 6. can you think of any other way to refractor?
        // 7. How have other people solved this problem?
function charCount(str){
    // create object to return at end
    let result = {};

    // Loop over the string and take each character
    for(let i = 0 ; i < str.length ; i++){
        let char = str[i].toLowerCase();
        // If the character is number/letter and it is present as key in object then add count  
        if(checkValidation(char) && result[char] > 0)
            result[char]++;
        // If the character is number/letter and it is not present as key in object then set count value to 1
        else if (checkValidation(char))
            result[char] = 1;
    }
        
        // If the character is space,period then dont do anything 
    // return object at end  
    return result;
}

function checkValidation(char){

    // create boolean to return at end
    let result = false;

    // Create regular expression which support number and string
    let reg = /[a-z0-9]/;
    // check char matches the regular expression
    result = reg.test(char) ? true : false;
    
    // return the boolean at end
    return result;
}

console.log(charCount("My name is Anbu !"))
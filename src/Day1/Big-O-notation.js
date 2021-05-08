// 1. Why Big O
    // In case of many solutions to the problem, we can select the best one using Big O
    // We can count number of operation computer has to perform
// 2. To find better
    // Faster, Less memory (how many varibale or function created)
// 3. Without Big O
    // we cannot mesaure using time it will vary based on computer



    function sumNumbers(number){
        let total = 0;
        for(let i = 1 ; i <= number ; i++){
            total += i;
        }
        return total;
    }
    let t1 = Date.now();
    sumNumbers(10000000000)
    
    let t2 = Date.now();
    console.log(`Time elapsed: ${(t2-t1) / 1000} seconds`)
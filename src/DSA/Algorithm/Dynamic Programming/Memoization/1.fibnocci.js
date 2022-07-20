/**
 * Write a function takes N as order and return its corresponding value
 * Fib : 1,1,2,3,5,8,13,21
 * fib(3) => 2
 * Fib(6) => 8
 */

const fib = (n) => {
    if (n <= 2) return 1;

    return fib(n - 1) + fib(n - 2);
}



// Memoization
// Hash Map or JS object will be used to store repeated value (Num as key and result as value)

const fibDP = (num, memo = {}) => {

    if (num in memo) return memo[num];
    if (num <= 2) return 1;

    memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
    return memo[num];
}

console.log(fibDP(6))
console.log(fibDP(15))
console.log(fibDP(40))

// Time complexity O (N)
// Space Complexity O (N)
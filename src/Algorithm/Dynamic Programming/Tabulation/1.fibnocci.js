/**
 * Write a function takes N as order and return its corresponding value
 * n      : 0,1,2,3,4,5,6,7
 * Fib(n) : 0,1,1,2,3,5,8,13
 * fib(3) => 2
 * Fib(6) => 8
 */

const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[n];
}

console.log(fib(6))
console.log(fib(15))
console.log(fib(100))

// Time complexity O (N) Array length
// Space Complexity O (N) Array length
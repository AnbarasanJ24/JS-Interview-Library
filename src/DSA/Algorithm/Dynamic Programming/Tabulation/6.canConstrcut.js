/**
 * Given a target word and a word bank. using work bank, we need to con construct the target 
 * If we are able to form target then return  true else false
 */

const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i]) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[target.length];
};

// target = m , wordBank length = n 
// time: O (n * m * m) => O (m^2 *n), It has m iteration then n iteration with slice of m
// space: O (m*m) => O (m^2) where m for table and m for slice

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
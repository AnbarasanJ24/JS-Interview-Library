/**
 * Given a target word and a word bank. using work bank, we need to con construct the target 
 * If we are able to form target then return  true else false
 */

const canConstruct = (target, wordBank) => {
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank)) {
                return true;
            }
        }
    }

    return false;
};

// Brute Force
// target = m , wordBank length = n 
// time: O (n^m * m)  where branching factor n, calles based on target and m for slice operation
// space: O (m*m) => O (m^2) where m for call stack and m for slice


const canConstructDP = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo)) {
                memo[target] = true;
                return memo[target];
            }
        }
    }
    memo[target] = false;
    return memo[target];
};
// Memoized
// target = m , wordBank length = n 
// time: O (n * m * m)  where branching factor n, calles based on target and m for slice operation
// space: O (m*m) => O (m^2) where m for call stack and m for slice

console.log(canConstructDP("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
/**
 * Given a target word and a word bank. using work bank, we need to con construct the target
 * If we are able to form target then count all the possible ways else return zero
 */


const countConstruct = (target, wordBank) => {
    if (target === '') return 1;
    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWaysForRest = countConstruct(suffix, wordBank);
            totalCount += numWaysForRest;
        }
    }

    return totalCount;
};

// Brute Force
// target = m , wordBank length = n 
// time: O (n^m * m)  where branching factor n, calles based on target and m for slice operation
// space: O (m*m) => O (m^2) where m for call stack and m for slice


const countConstructDP = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;
    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWaysForRest = countConstruct(suffix, wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
};

// Memoized
// target = m , wordBank length = n 
// time: O (n * m * m)  where branching factor n, calles based on target and m for slice operation
// space: O (m*m) => O (m^2) where m for call stack and m for slice


console.log(countConstructDP("abcdef", ["ab", "abc", "cd", "def", "abcdef"]));
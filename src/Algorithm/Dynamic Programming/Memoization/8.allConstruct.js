/**
 * Given a target word and a word bank. using work bank, we need to con construct the target
 * If we are able to form target then return all the possible ways else return []
 * allConstruct(hello, [cat,mouse]) => []
 * allConstruct('', [cat,mouse]) => [[]]
 */

const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];
    let result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixways = allConstruct(suffix, wordBank);
            const totalWays = suffixways.map(way => [word, ...way]);
            result.push(...totalWays);
        }
    }
    return result;
};

// Brute Force
// target = m , wordBank length = n 
// time: O (n^m * m)  where branching factor n, calles based on target and m for slice operation
// space: O (m*m) => O (m^2) where m for call stack and m for slice

const allConstructDP = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];
    let result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixways = allConstruct(suffix, wordBank, memo);
            const totalWays = suffixways.map(way => [word, ...way]);
            result.push(...totalWays);
        }
    }
    memo[target] = result;
    return result;
};

// Memoized
// target = m , wordBank length = n 
// time: O (n * m * m)  where branching factor n, calles based on target and m for slice operation
// space: O (m*m) => O (m^2) where m for call stack and m for slice


console.log(allConstructDP("abcdef", ["ab", "abc", "cd", "def", "abcdef"]));
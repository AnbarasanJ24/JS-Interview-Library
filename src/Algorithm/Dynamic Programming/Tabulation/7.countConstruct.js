/**
 * Given a target word and a word bank. using work bank, we need to con construct the target
 * If we are able to form target then count all the possible ways else return zero
 */


const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === 1) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i];
                }
            }
        }
    }
    return table[target.length];

};


// target = m , wordBank length = n 
// time: O (n * m * m)  where branching factor n, calles based on target and m for slice operation
// space: O (m*m) => O (m^2) where m for call stack and m for slice


console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcdef"]));
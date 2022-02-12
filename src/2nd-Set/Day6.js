// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
//     Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

var numJewelsInStones = function (jewels, stones) {

    if (jewels === null || stones === null) return -1;
    if (jewels.length === 0 || stones.length === 0) return -1;
    let result = 0;


    let jewelsSet = new Set(jewels);
    for (let stone of stones) {
        if (jewelsSet.has(stone)) {
            result += 1;
        }
    }

    return result;
};
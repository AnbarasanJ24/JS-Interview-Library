// Find max frequency character

// Follow Up
// What will happen if we have same frequency for two characters

let str = "aabdfgs";

const maxFrequency = (str) => {

    let memo = new Map();

    for (let i = 0; i < str.length; i++) {


        if (memo.has(str[i])) {
            memo.set(str[i], memo.get(str[i]) + 1);
        } else {
            memo.set(str[i], 1);
        }
    }


}




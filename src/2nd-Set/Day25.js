// Find Smallest Letter Greater Than Target

// Given a characters array letters that is sorted in non - decreasing order and a character target, 
// return the smallest character in the array that is larger than target.

// Note that the letters wrap around.
// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

// Input: letters = ["c", "f", "j"], target = "c"
// Output: "f"

// This is a variation of ceil problem where we need to remove target === middle matching
// Also if there is no element found greater than target, then we have to return first letter
// In those case left will be length of the array, so left % arr.length will give zero index
// In case of other answer like index 2 => 2%4 still gives 2 as answer

var nextGreatestLetter = function (letters, target) {

    let left = 0;
    let right = letters.length - 1;

    // if (target < letters[left] || target >= letters[right]) {
    //     return letters[0]
    // }

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);

        if (target < letters[middle]) {
            right = middle - 1;
        } else {

            left = middle + 1;
        }
    }
    return letters[left % letters.length];
};
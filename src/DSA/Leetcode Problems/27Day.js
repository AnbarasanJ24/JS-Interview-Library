// Find position of an element in a sorted array of infinite numbers

// Efficient
// we can use BS here, where we need to find the start and end place then using BS we can find the place
// Since it is infinte we cannot determine the last element, so we can check different chunk of data
// For BS, we will take N size of array then will divide by 2 and then 2 and so on
// Here we can go throught bottom to top, so select 2 size then 4 size then 8 size
// So the time complexity will remain the same, check 2 size contains element else check in 4 or 8 or 16 and so on

const binarySearch = function (arr, target, start, end) {

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (target === arr[middle]) {
            return target;
        } else if (target < arr[middle]) {
            end = middle + 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
}

const findElemment = function (arr, target) {

    // Take initial size a 2
    let start = 0;
    let end = 1;

    // Check target is less than end, if so it lies b/t start and end range
    // if target is greater than end, we need to double the size
    while (target > arr[end]) {
        let newStart = end + 1; //Since we are using previous start value in next step, we stored as temp
        // End will be previous end + size of box * 2
        end = end + (end - start + 1) * 2;
        start = newStart;
    }

    return binarySearch(arr, target, start, end);


}
// Debouncing - Collect all value for certain amount of time and return the latest value
// When we call the API once we give pause or certain amount of time then debouncing will be useful 

// Create debounce function with main function which fetch data and return new function.
// Returned function will be mapped in HTML
// Usecase : Capturing screen size event, scroll event call ->lazy 


let counter = 0;
// FUnction called when the user type something
const getData = (term) => {
    console.log("Data", ++counter, term)
}

// Debounce function will return another function
const debounce = function (callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay)
    }
}

// This fetchsearchData will be called with 300 ms time frame
// It will collect all data till 300ms and give the final result
const fetchSearchData = debounce(getData, 300);
// Debouncing - It will delay the function invoke 

// Lets assume, Once a input change event occured, we have to call a function after 2 sec
// After 1 sec is over, if there is a another same event occur, we need to cancel the previous function call and 
// Start the timer again for 2sec

// Usually when we have search functionality, for each keyword will call the API
// Instead of calling API for each word, we can hold for few ms and collect the user input then make a API call

// Create debounce function which takes two parameters i.e a function which fetch data and delay and finnaly it will return a new function
// Just call the passed function after the delay using settimeout and also make sure previous timer is cleared
// Returned function will be mapped in HTML
// Usecase : Capturing screen size event, scroll event call ->lazy 


let counter = 0;
// Function called when the user type something
const getData = (term) => {
    console.log("Data", ++counter, term)
}

// Debounce function will return another function
const debounce = function(func, wait) {
    let timer;

    return (...args)=>{
      clearTimeout(timer);
      timer = setTimeout(()=>{
        func.apply(this, args)
      }, wait)
    }
}

// This fetchsearchData will be called with 300 ms time frame
// It will collect all data till 300ms and give the final result
const fetchSearchData = debounce(getData, 300);


// SCROLL EVENT
const getScrollCount = debounce(() => getData('Term'), 300);

// Window looking for scroll event 
window.addEventListener('scroll', getScrollCount)
// Debouncing - Collect all value for certain amount of time and return the latest value
// Debounce function will delay the invoke 
// Usually when we have serach functionality, for each keyword will call the API
// Instead of calling API for each word, we can hold for few ms and collect the user input then make a API call

// Create debounce function which takes two parameters i.e a function which fetch data and delay and finnaly it will return a new function
// Just call the passed function after the delay using settimeout and also make sure previous timer is cleared
// Returned function will be mapped in HTML
// Usecase : Capturing screen size event, scroll event call ->lazy 


let counter = 0;
// FUnction called when the user type something
const getData = (term) => {
    console.log("Data", ++counter, term)
}

// Debounce function will return another function
const debounce = function debounce(func, wait) {
    let timer;
    
    return (...args)=>{
      clearTimeout(timer);
      timer = setTimeout(()=>{
        func.call(this, args)
      }, wait)
    }
}

// This fetchsearchData will be called with 300 ms time frame
// It will collect all data till 300ms and give the final result
const fetchSearchData = debounce(getData, 300);
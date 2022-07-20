let counter = 0;
const debounce = function (callBack, delay) {
    let timer;
    return function (...args) {

        clearTimeout(timer);
        timer = setTimeout(() => {
            callBack(...args)
        }, delay)
    }
}

const getData = (Term) => {
    console.log("counter", ++counter, Term)
}
const getScrollCount = debounce(() => getData('Term'), 300);

// Window looking for scroll event 
window.addEventListener('scroll', getScrollCount)



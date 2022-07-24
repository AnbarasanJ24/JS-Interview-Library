// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

function foo() {
    console.log('my log message');
}

// Usuall Function call
foo()

// IIFE FUnction call

    (function foo() {
        console.log('my log message');
    })();

// or function can be anonymous


(function () {
    console.log('my log message');
})();
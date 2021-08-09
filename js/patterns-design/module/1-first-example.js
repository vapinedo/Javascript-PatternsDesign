// Module definition
var testModule = (function () {
    var counter = 0;

    return {
        incrementCounter: function () {
            console.log('Message from incrementCounter');
            return counter++;
        },
        resetCounter: function () {
            console.log('Counter value prior to reset', counter);
            counter = 0;
        }
    };
})();

// Module usage
    // Increment our counter
    testModule.incrementCounter();

    // Check counter value and reset
    // Outputs: counter value prior to reset: 1
    testModule.resetCounter();

function foo(){ /* code */ }( 1 );
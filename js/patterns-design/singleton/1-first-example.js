var mySingleton = (function() {
    // Instance stores a reference to the singleton
    var instance;

    function init() {
        // Singleton

        function privateMethod() {
            const message = 'Am a private method';
            console.log(message);
        }

        var privateProperty = "Am a private property";
        var privateRandomNumber = Math.random();

        return {
            // Public methods and properties
            publicMethod: function() {
                const message = 'Am a public method';
                console.log(message);
            },

            publicProperty: 'Am a public property',

            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };

    return {
        /*  Get the singleton instance if one exists
            or create one if it doesn´t */ 
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

var myBadSingleton = (function() {
    // Instance stores a reference to the singleton
    var instance;

    function init() {
        // Singleton 

        var privateRandomNumber = Math.random();

        return {
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };

    return {
        // Always create a new singleton instance
        getInstance: function() {
            instance = init();
            return instance;
        }
    };
})();

// Usage 
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

var badsingleA = myBadSingleton.getInstance();
var badsingleB = myBadSingleton.getInstance();
console.log(badsingleA.getRandomNumber() === badsingleB.getRandomNumber()); // false
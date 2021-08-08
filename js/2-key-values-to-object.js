
/*---------------------------------------------
    4 Ways to add key-value pair to javascript 
    object
---------------------------------------------*/

// 1. Dot sintax
    var bread = {};
    bread.price = "1 USD";
    console.log(bread.price);

// 2. Square bracket sintax
    var hobby = Object.create(Object.prototype);
    hobby["hobbyName"] = 'Play Soccer';
    console.log(hobby['hobbyName']);

// 3. Trough defineProperty ( Only available for ES5 )
    var videoGames = new Object();
    Object.defineProperty(videoGames, "name", {
        value: "Call of Duty Mobile",
        writable: true,
        enumerable: true,
        configurable: true
    });
    console.log(videoGames)

    // Another way for above approachs looks like so:
    var defineProp = function(obj, key, value) {
        var config = {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(obj, key, config);
    }

    // Now for use it:
    var person = {};
    defineProp(person, "Firstname", "Victor");
    defineProp(person, "Lastname", "Pinedo");
    console.log(person);

// 4. Object.defineProperties
    var food = new Object();
    Object.defineProperties(food, {
        "breakfast": {
            value: "Sandwich",
            writable: true
        },
        "lunch": {
            value: "Chicken Soup + White Rice",
            writable: false
        }
    });
    food.breakfast = 'Icecream';
    food.lunch = 'Meal';
    // NOTE: lunch can't be modified
    console.log(food);
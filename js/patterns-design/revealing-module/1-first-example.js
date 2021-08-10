var myRevealingModule = (function () {
    var privateVar = "Cristiano Ronaldo";
    var publicVar = "Leonel Mesii";

    function privateFunction() {
        console.log(`My name is ${privateVar}`);
    }

    function publicSetName(strName) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }

    /*  Reveal public pointers to 
        private functions and properties */
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
})();

myRevealingModule.setName("Victor Pinedo");
myRevealingModule.getName();
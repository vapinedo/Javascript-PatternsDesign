var myModule = (function () {
    // Public Object
    var module = {};
    var privateProperty = 'Am a private property';
    
    module.publicProperty = 'Am a public property';
    module.publicMethod = function () {
        console.log(privateProperty);
    };

    return module;
})();

myModule.publicMethod();
console.log(myModule.publicProperty);
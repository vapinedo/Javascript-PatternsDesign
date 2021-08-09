/*---------------------------------------------
    Import mixins
    This variation of the pattern demonstrates how globals 
    (e.g jQuery, Underscore) can be passed in as arguments 
    to our module's anonymous function. 
    This effectively allows us to import them 
    and locally alias them as we wish.
---------------------------------------------*/

var myModule = (function ( JQ, _ ) {

    function privateMethod1() {
        JQ(".container").html("Test");
    }

    function privateMethod2() {
        console.log(_.min(10, 5, 100, 2, 1000));
    }

    return {
        publicMethod: function () {
            privateMethod1();
        }
    };
})( jQuery, _ );

myModule.publicMethod();
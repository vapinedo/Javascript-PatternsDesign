// Module definition
var shoppingCartModule = (function () {
    var basket = [];
   
    return {
        addItem: function( values ) {
            basket.push(values);
        },
        getItems: function () {
            return basket;
        },
    };
})();

// Usage
shoppingCartModule.addItem({
    item: "bread",
    price: 0.5
});
shoppingCartModule.addItem({
    item: "butter",
    price: 0.3
});

console.log(shoppingCartModule.getItems());
   
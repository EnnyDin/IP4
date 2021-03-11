$("#checkout").click(function (event) {
    event.preventDefault();
    let flavour = $("#flavour option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = $("#toppings option:selected").val();
    let number = $("#number").val();
    console.log(size);

    //Function order
    let order = (f, s, c, t, n, total) => {
        return {f, s, c, t, n, total};
    };


    switch (toppings) {
        case toppings = "pepperoni":
            totalPrice = totalPrice + 100;
            break;
        case toppings = "macon":
            totalPrice = totalPrice + 150;
            break;
        case toppings = "steak":
            totalPrice = totalPrice + 200;
            break;
        case toppings = "ham":
            totalPrice = totalPrice + 100;
            break;
        case toppings = "cheese":
            totalPrice = totalPrice + 100;
            break;
        case toppings = "onions":
            totalPrice = totalPrice + 80;
            break;
        case toppings = "chilli":
            totalPrice = totalPrice + 50;
            break;
        case toppings = "mushroom":
            totalPrice = totalPrice + 80;
            break;
    }

    let newOrder = order(flavour, size, crust, topping, number,);
    console.log(newOrder); // test func

    $('#list').text(" ");
    $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
        + newOrder.s + "<br>" + "Crust :     "
        + newOrder.c + "<br>" + "Toppings :     "
        + newOrder.t + "<br>" + " Number of pizzas :    "
        + newOrder.n + "<br>" + "Total Price :  ")
});

$("#checkout").click(function (event) {
    event.preventDefault();
    let flavour = $("#flavour option:selected").val();
    let size = $("#size option:selected").val();
    let toppings = $("#toppings option:selected").val();
    let number = $("#number").val();
    console.log(size, flavour, toppings);

    let order = (f, s, t, n, total) => {
        return {f, s, t, n, total};
    };
    var price, total;

    if (size == "small") {
        price=300;
    }else if (size == "medium"){
        price=600;
    }else if (size =="large"){
        price=1200;
    }else  {
        return false;

    } 
    console.log(price);
    
    switch (toppings) {
        case toppings = "pepperoni":
            totalPrice = (price + 100) * number;
            break;
        case toppings = "macon":
            totalPrice = (price + 150) * number;
            break;
        case toppings = "steak":
            totalPrice = (price + 200) * number;
            break;
        case toppings = "ham":
            totalPrice = (price + 100) * number;
            break;
        case toppings = "cheese":
            totalPrice = (price + 100) * number;
            break;
        case toppings = "onions":
            totalPrice = (price + 80) * number;
            break;
        case toppings = "chilli":
            totalPrice = (price + 50) * number;
            break;
        case toppings = "mushroom":
            totalPrice = (price + 80) * number;
            break;
    }
    console.log(totalPrice);

    let newOrder = order(flavour, size, toppings, number,totalPrice);
    console.log(newOrder); // test func

   
$(".deliver").click(function () {
    prompt ("PLEASE INPUT YOUR LOCATION" + "delivery fee is Sh. 150");
});
$('#list').text(" ");
$("#list").append("<br>" + "flavour :   " 
    + newOrder.f + "<br>" + "size :   "
    //+ newOrder.s + "<br>" + "crust :     "//
    + newOrder.c + "<br>" + "toppings :     "
    + newOrder.t + "<br>" + " number of pizzas :    "
    + newOrder.n + "<br>" + "total :  "
    + newOrder.total + "<br>" )
});
  
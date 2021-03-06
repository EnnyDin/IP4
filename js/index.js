//function Pizza(size, crust, toppings,price) {
//    this.size = size;
//    this.crust = crust;
//    this.toppings= toppings;
//    this.number = number;
//    this.price = price;
//  }

  $("#checkout").click(function () {
    event.preventDefault();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let toppings = $("#toppings option:selected").val();
    let number = $("#number").val();
    console.log(size,crust,toppings,number);
})

function myOrder(size, crust, toppings, number, totalPrice) {
    return { size, crust, toppings, number, totalPrice};
}
   console.log(myOrder);
   function Size(small, medium, large){
       this.small = small;
       this.medium = medium;
       this.large = large;
   }

   
Size.prototype.small =function(){
    //size = "small";
    price = 300; 
   return price * number;
}
Size.prototype.medium =function(){
    //size = "medium";
    price = 600; 
    return price * number;
}
Size.prototype.large =function(){
    //size = "large";
    price = 1200; 
    return price * number;
}


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
    //console.log(totalPrice); 
       
//    let newOrder = myOrder(size, crust, toppings, number, totalPrice);
//    $('#list').text();
//    $("#list").append(newOrder.f + "<br>" + "size :   "
//        + newOrder.s + "<br>" + "crust :     "
//        + newOrder.c + "<br>" + "toppings :     "
//        + newOrder.t + "<br>" + " number :    "
//        + newOrder.n + "<br>" + "totalPrice :  ")
    $('#list').text();
    $('#list').append()



    $(".deliver").click(function () {
        prompt ("PLEASE INPUT YOUR LOCATION");
    })

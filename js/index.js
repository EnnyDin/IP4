function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings= toppings;
  }

$("#checkout").click(function () {
    event.preventDefault();
    let size = $("#size option:selected").value();
    let crust = $("#crust option:selected").value();
    let toppings = $("#toppings option:selected").value();
    let number = $("#number").value();
    console.log(size,crust,toppings,number);
})

  
   if (size = "small") {
    price = 300;
   }else if (size = "medium") {
    price = 600;    
   }else if (size = "large"){

       price = 1200;
   }

   document.getElementById("size").innerHTML
   function Size(small, medium, large){
       this.small = small;
       this.medium = medium;
       this.large = large;
   }
   document.getElementById("number").innerHTML
   number = $("#number").val();

Size.prototype.small =function(){
   return (300 * number);
}
Size.prototype.medium =function(){
    return (600 * number);
}
Size.prototype.large =function(){
    return (1200 * number);
}
console.log(price * number);

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
       
    let newOrder = (size, crust, toppings, number);

$ ("#list").text();
$ ("#list").append ("size: " + "<br>" +
 "crust: " + "<br>" +
 "toppings: " + "<br>" +
 "number: ")

    $(".deliver").click(function () {
        prompt ("PLEASE INPUT YOUR LOCATION" + "delivery fee is Sh. 150");
    });
    

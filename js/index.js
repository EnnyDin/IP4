function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings= toppings;
    this.number = number;
  }

  $("#checkout").click(function () {
    event.preventDefault();
    let size = $("#size option:selected").val("");
    let crust = $("#crust option:selected").val("");
    let toppings = $("#toppings option:selected").val("");
    let number = $("#number").val("");
    //console.log(size,crust,toppings,number);
})

function order(size, crust, toppings, number, total) {
    return { size, crust, toppings, number, total};
}
let price, totalPrice;
Pizza.prototype.yourOrder =function(){
    size = "small";
    this.price = 300; 
   return totalPrice = (price * number)
}
Pizza.prototype.yourOrder =function(){
    size = "medium";
    this.price = 600; 
   return totalPrice = (price * number)
}
Pizza.prototype.yourOrder =function(){
    size = "large";
    this.price = 1200; 
   return totalPrice = (price * number)
}

//var totalPrice = (price*number)

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
       console.log(yourOrder); 
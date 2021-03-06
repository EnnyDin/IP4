function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings= toppings;
  }

  $("#checkout").click(function () {
    event.preventDefault();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let toppings = $("#toppings option:selected").val();
    let number = $("#number").val();
    console.log(size,crust,toppings,number);
})


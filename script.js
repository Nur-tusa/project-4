$(function () {
    $('.result').hide();


    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        let order = (flavour, size, crust, topping, number, total) => {
            return {flavour, size, crust, topping, number, total};
        };

        let price, totalPrice;
        switch (flavour) {
           
            case flavour = "periperi":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "glutenfree") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 50;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "glutenfree") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 50;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "glutenfree") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 50;
                        }
                        break;
                }
                break;
            case flavour = "saladpizza":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "glutenfree") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 50;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "glutenfree") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 50;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "glutenfree") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 500;
                        }
                        break;
                }
                break;
            case flavour = "fishPiza":
                switch (size) {
                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "glutenfree") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 50;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "glutenfree") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 50;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "glutenfree") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 50;
                        }
                        break;
                }
                break;
        }
        switch (topping) {
            case topping = "mushroom":
                totalPrice = totalPrice + 50;
                break;
            case topping = "salad":
                totalPrice = totalPrice + 50;
                break;
            case topping = "chillyexcess":
                totalPrice = totalPrice + 50;
                break;
            case topping = "extraCheese":
                totalPrice = totalPrice + 50;
                break;
            

        }
////////////run the  code 
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder); 

        $('.result').slideDown(2000);
       alert( "you choosed this flavour "+flavour + "\n"+"the size of the pizza  "+size + "\n"+"crust added " +crust + "\n"+"topping added"  + topping + "\n"+"" + "quantity of pizza"   + number )
        $('#list').slideDown();

        $("#list").append("<br>" + "Flavour :   " + newOrder.flavour + "<br>" + "Size :   "

            + newOrder.size + "<br>" + "Crust :     "

            + newOrder.crust + "<br>" + "Toppings :     "

            + newOrder.topping + "<br>" + " Number of pizzas :    "

            + newOrder.number + "<br>" + "Total Price :  "

            + newOrder.total + "<br><br>")
    });

    //Deliver
    $(".deliver").click(function () {
        $("#delivery-charge").html("delivery will be charged extra - 100 shs");
        $('.result').slideUp();
        $('#list').slideUp();
        alert("thank you we have received your request.the pizza will be deliverd to your location")

    });


    //Pick Up
    $(".take").click(function () {
        alert("wait 15 minute customer to pick the pizza")

    });

    
});
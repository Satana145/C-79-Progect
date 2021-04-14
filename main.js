pizzaMenu = [
    "<h4>1. Vegetable Pizza<h4>",
    "<h4>2. Paneer Pizza<h4>",
    "<h4>3. Pineapple Pizza<h4>",
    "<h4>4. Hawaiian Pizza<h4>",
    "<h4>5. Cheese Pizza<h4>",
    "<h4>6. Spaghetti Pizza<h4>",
    "<h4>7. Macaroni & Cheese Pizza<h4>",
    "<h4>8, Pasta Pizza<h4>",
    "<h4>9. Garlic Pizza<h4>",
    "<h4>10. Chili Pizza<h4>",
    "<h4>11. Pizza Sandwich<h4>",
    "<h4>12. Pie Pizza<h4>"
];

console.log(pizzaMenu);
var reomas = pizzaMenu.join(" ");
console.log(reomas);

function sub() {
    document.getElementById("displayNamesWCommas").innerHTML = reomas;
    var x = document.getElementById("displayNamesWCommas");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}
var length = pizzaMenu.length;

function suggest() {
    document.getElementById("top").placeholder = "Type Your Favorite Pizza and Press Enter";
}
function pushA() {
    pizzaMenu.push("<h4>" + (length + 1) + ". " + document.getElementById("addPizza").value + "</h4>");
    window.alert("Your Pizza was Added to the Menu");
    console.log(pizzaMenu);
}

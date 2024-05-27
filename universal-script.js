//This is code for the shopping cart quantity button
//assigning variables for CSS selectors to interact with the button
const quantityButton = document.getElementsByClassName("quantity-btn"); //idk if const will work since there are technically multiple elements called "quantity-btn"
const quantityMinus = document.getElementsByClassName("qty-count--minus");
const quantityAdd = document.getElementsByClassName("qty-count--add");
const productQuantity = document.getElementsByClassName("product-qty")

//onclick for quantityAdd - add one to the input field value
function addOne(){
    let currentQuantity = parseInt(productQuantity.innerHTML);
    console.log(currentQuantity);

    let newQuantity = currentQuantity + 1;
    currentQuantity = newQuantity;
}

//honestly idk what I'm doing, will attempt to fix this later
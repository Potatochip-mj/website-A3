//This is the page for all the JS script for the Westec website!

//A key value pair array used to hold all the items of the site
const products = [

    {
        qtyId: 1,
        shortName: "Sansai Speaker",
        longName: "SANSAI 20W TWS BLUETOOTH SPEAKER WITH LED LIGHTS",
        price: 84.70,
        category: "Speakers",
        brand: "Sansai"
    },
    {
        qtyId: 2,
        shortName: "Denon Speaker",
        longName: "DENON HOME 150 WIRELESS HEOS BLUETOOTH SPEAKER",
        price: 280.00,
        category: "Speakers",
        brand: "Denon"
    },
    {
        qtyId: 3,
        shortName: "Mcdodo Cable",
        longName: "MCDODO 100W 5A USB-C TO USB-C HIGH SPEED LEAD - 1.2M",
        price: 24.00,
        category: "Cables",
        brand: "Mcdodo"
    },
    {
        qtyId: 4,
        shortName: "Mcdodo Charger",
        longName: "MCDODO 3A RIGHT ANGLE USB TO RIGHT ANGLE LIGHTNING LEAD - 3M",
        price: 24.00,
        category: "Chargers",
        brand: "Mcdodo"
    },
    {
        qtyId: 5,
        shortName: "Tp-Link Port",
        longName: "TP-LINK 5 PORT NETWORK SWITCH HUB",
        price: 22.00,
        category: "Ports",
        brand: "Tp-Link"
    },
    {
        qtyId: 6,
        shortName: "Sansai Remote",
        longName: "SANSAI 8 IN 1 UNIVERSAL REMOTE CONTROL WITH LEARNING FUNCTION",
        price: 26.95,
        category: "Remotes",
        brand: "Sansai"
    },
    {
        qtyId: 7,
        shortName: "Sonken Microphone",
        longName: "SONKEN 2CH WIRELESS MICROPHONE RECEIVER WITH 2 MICS INCLUDED",
        price: 400.00,
        category: "Microphones",
        brand: "Sonken"
    },
    {
        qtyId: 8,
        shortName: "Koss Headset",
        longName: "KOSS BUDGET ON EAR STEREO HEADPHONES - BLACK",
        price: 70.00,
        category: "Headsets",
        brand: "Koss"
    },
    {
        qtyId: 9,
        shortName: "Westec Headset",
        longName: "WESTEC KIDS 85DB RECHARGEABLE BLUETOOTH HEADPHONES - PURPLE",
        price: 59.00,
        category: "Headsets",
        brand: "Westec"
    },
    {
        qtyId: 10,
        shortName: "Mcdodo Power Bank",
        longName: "MCDODO 10,000MAH POWER BANK - 2x QC3.0 USB + 1x PD TYPE-C OUTPUTS",
        price: 39.00,
        category: "Chargers",
        brand: "Mcdodo"
    }
];

//side nav overlay functions
function openSideNav(){
    document.getElementById("sideNavOpen").style.display = "none";
    
    document.getElementById("sideNavClose").style.display = "block";
    
    document.getElementById("mySideNav").style.width = "390px";
}

function closeSideNav(){
    document.getElementById("sideNavOpen").style.display = "block";
    
    document.getElementById("sideNavClose").style.display = "none";
    
    document.getElementById("mySideNav").style.width = "0";
}


//declaration of variables that will be used for search and filtering
let priceMinVal = 0;
let priceMaxVal = 500;
let itemsDisplayed = [];
let searchBar;

//code for the search bar, the function below forces the HTML file to load first before searching for anything
document.addEventListener("DOMContentLoaded", function() {

    itemsDisplayed = document.querySelectorAll(".item.cluster");
    searchBarDesktop = document.querySelector(".search-bar--desktop");
    searchBarIphone = document.querySelector(".search-bar--iphone");

    //function that filters through each item and displays ones that matches the search
    //this one is for desktop resolution
    //code adapted from: https://www.youtube.com/watch?v=TlP5WIxVirU&t=7s
    searchBarDesktop.addEventListener("input", function(event){
        const userInput = event.target.value.trim().toLowerCase();
        itemsDisplayed.forEach(function(itemDisplayed){
            let itemTitle = itemDisplayed.querySelector('.item-title').innerHTML;
            if (itemTitle.trim().toLowerCase().includes(userInput)) {
                itemDisplayed.style.display = 'flex';
            }else{
                itemDisplayed.style.display = 'none';
            }
        });
    })

    //this one is for mobile res
    searchBarIphone.addEventListener("input", function(event){
        const userInput = event.target.value.trim().toLowerCase();
        itemsDisplayed.forEach(function(itemDisplayed){
            let itemTitle = itemDisplayed.querySelector('.item-title').innerHTML;
            if (itemTitle.trim().toLowerCase().includes(userInput)) {
                itemDisplayed.style.display = 'flex';
            }else{
                itemDisplayed.style.display = 'none';
            }
        });
    })
});


//PRODUCTS LIST page script

//Button for the products list page to show all the filters
function showFilters(){
    
    //making all the elements that aren't part of the filters invisble and showing the filters
    document.querySelector(".no-results-container").style.display = 'none';
    document.querySelector('.filter-bar-search--iphone').style.display = 'none';
    document.querySelector('.filter-bar-search--desktop').style.display = 'none';
    document.querySelector('.items-container').style.display = 'none';
    document.querySelector('.filter-bar-sort').style.display = 'none';
    document.querySelector('.filter-bar-filter').style.display = 'none';
    document.querySelector('.back-button-container').style.display = 'flex';
    document.querySelector('.filters-container').style.display = 'flex';

    //variables for the price slider
    const rangeInput = document.querySelectorAll('.slider-range-input input');
    let priceMinText = document.getElementById('price-min');
    let priceMaxText = document.getElementById('price-max');
    progress = document.querySelector(".slider-body .slider-range");

    //variable for the minimum price gap within the price slider
    let priceGap = 20;

    //function that changes the look of the slider with each new input on the slider
    //code adapted from: https://www.youtube.com/watch?v=FShnKqPXknI
    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value);
            let maxVal = parseInt(rangeInput[1].value);
            priceMinVal = minVal;
            priceMaxVal = maxVal;

            if(maxVal - minVal < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal-priceGap;
                }else{
                    rangeInput[1].value = minVal+priceGap;
                }
            }else{
                priceMinText.innerHTML = minVal.toString();
                priceMaxText.innerHTML = maxVal.toString();
                progress.style.left = (minVal/rangeInput[0].max) * 100 + "%";
                progress.style.right = 100 - (maxVal/rangeInput[1].max) * 100 + "%";
            }
        });
    });
};


//Back button to close out of the filters and reshow the items
function showItems(){

    //storing the category and brand checkboxes into variables 
    let categoryCheckboxes = document.getElementsByName("category");
    let brandCheckboxes = document.getElementsByName("brand");

    //empty arrays in which the checked categories, brands and items to be displayed will be stored
    let checkedCategories = [], checkedBrands = [], itemsToDisplay = [];

    //looping through the category checkboxes to see which ones have been ticked and storing into empty array
    for(let i = 0; i<categoryCheckboxes.length; i++){
        if(categoryCheckboxes[i].checked){
            checkedCategories.push(categoryCheckboxes[i].value);
        }
    }

    //looping through the brand checkboxes to see which ones have been ticked and storing into empty array
    for(let i = 0; i<brandCheckboxes.length; i++){
        if(brandCheckboxes[i].checked){
            checkedBrands.push(brandCheckboxes[i].value);
        }
    }

    //looping through the products array and checked brands array to see which ones match
    //storing matching items into empty array declared above
    for(let i = 0; i<checkedBrands.length; i++){
        for(let a = 0; a<products.length; a++){
            if(products[a].brand == checkedBrands[i]){
                itemsToDisplay.push(products[a].shortName);
            }
        }
    }

    //similarly, looping through to see which products match with the ticked categories
    //however this one only adds it if a brand of that category is also ticked
    for(let i = 0; i<checkedCategories.length; i++){
        loop1:
        for(let a = 0; a<products.length; a++){
            if(products[a].category == checkedCategories[i]){
                for(let u = 0; u<checkedBrands.length; u++){
                    if(products[a].brand !== checkedBrands[u]){
                        continue loop1;
                    }
                }
                for(let x = 0; x<itemsToDisplay.length; x++){
                    if(products[a].shortName == itemsToDisplay[x]){
                        continue loop1;
                    }else if(x == itemsToDisplay.length - 1 && products[a] !== itemsToDisplay[x]){
                        itemsToDisplay.push(products[a].shortName);
                    }
                }
            }
        }
    }

    //loops through the items to be displayed array to take out items that aren't both ticked in category and brand
    //before this loop items would show even when their category wasn't ticked as long as their brand was ticked
    //this loop fixes the array which displays items ticked in both categories and brands
    loop2:
    for(let i = 0; i<itemsToDisplay.length; i++){
        for(let a = 0; a<products.length; a++){
            if(itemsToDisplay[i] == products[a].shortName){
                for(let x = 0; x<checkedCategories.length; x++){
                    if(products[a].category == checkedCategories[x]){
                        continue loop2; 
                    }
                    if(x == checkedCategories.length - 1){
                        itemsToDisplay.splice(i, 1);
                    }
                }
            }
        }
    }

    //loops through the items to be displayed array to see which items fall within the desired price range of the user
    //takes out elements in the array that don't fall within this range
    loop3:
    for(let i = 0; i<itemsToDisplay.length; i++){
        loop4:
        for(let a = 0; a<products.length; a++){
            if(itemsToDisplay[i] == products[a].shortName){
                if(products[a].price >= priceMinVal && products[a].price <= priceMaxVal){
                    continue loop3;
                }else{
                    itemsToDisplay.splice(i, 1);
                    i--;
                    break loop4;
                }
            }
        }
    }

    //an if else statement to determine whether the array is empty or not
    //if it is empty, show error message and if else, correctly displays items to be shown
    if(itemsToDisplay.length == 0){
        itemsDisplayed.forEach(function(itemDisplayed){
            itemDisplayed.style.display = 'none';
        })
        document.querySelector(".no-results-container").style.display = "flex";
    }else{
        document.querySelector(".no-results-container").style.display = "none";
        //loops through the items currently displayed and see if the title matches one within the items to display array
        //if it does, change the display to flex and if not change it to none
        itemsDisplayed.forEach(function(itemDisplayed){
            let itemTitle = itemDisplayed.querySelector('.item-title').innerHTML;
            for(let i = 0; i<itemsToDisplay.length; i++){
                if (!itemsToDisplay.includes(itemTitle)) {
                    itemDisplayed.style.display = 'none';
                }else{
                    itemDisplayed.style.display = 'flex';
                }
            }
        });
    }

    //shows and hides elements when user is done filtering
    searchIphone = document.querySelector('.filter-bar-search--iphone');
    searchDesktop = document.querySelector('.filter-bar-search--desktop');
    document.querySelector('.items-container').style.display = 'grid';
    document.querySelector('.filter-bar-sort').style.display = 'flex';
    document.querySelector('.filter-bar-filter').style.display = 'flex';
    document.querySelector('.back-button-container').style.display = 'none';
    document.querySelector('.filters-container').style.display = 'none';
    //if statement to determine which search bar to show depening on screen res
    if(screen.width >= 400){
        searchDesktop.style.display = "flex";
    }else{
        searchIphone.style.display = "flex";
    }


};


//PRODUCT PAGE script

//image carousel
//code adapted from: https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
showSlides(slideIndex);

//next/previous image controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("item-container__img");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }

    for (i = 0; i < dots.length; i++){
        slides[i].style.display = "none";
    }
    
    for (i = 0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace(" active-img", "")
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-img";
}


//description accordion 
//code adapted from: https://www.w3schools.com/howto/howto_js_accordion.asp
function openAccordion(){
    let accordion = document.getElementsByClassName("accordion");

    for (i = 0; i <accordion.length; i++){
        accordion[i].addEventListener("click", function(){
            this.classList.toggle("active-accordion");

            //toggles between showing and hiding the active panel
            let panel = this.nextElementSibling;

            if (panel.style.display === "block"){
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}


//Quantity button controls - this is used in product details pages and in the cart!
//code adapted from: https://codepen.io/ChynoDeluxe/pen/poyNEay
function addOne(id){

    let textID = "product-qty-" + id + "-value";
    let productQuantity = document.getElementById(textID);
    let qtyMin = parseInt(productQuantity.getAttribute("min"));
    let qtyMax = parseInt(productQuantity.getAttribute("max"));
    let qtyValue = parseInt(productQuantity.getAttribute("value"));

    if (qtyValue >= qtyMin && qtyValue <= qtyMax && (qtyValue + 1 >= qtyMin && qtyValue + 1 <= qtyMax)){
        qtyValue = qtyValue + 1;
        productQuantity.setAttribute("value", qtyValue.toString());
    }
}

function minusOne(id){
    let textID = "product-qty-" + id + "-value";
    let productQuantity = document.getElementById(textID);

    let qtyMin = parseInt(productQuantity.getAttribute("min"));
    let qtyMax = parseInt(productQuantity.getAttribute("max"));
    let qtyValue = parseInt(productQuantity.getAttribute("value"));

    if ((qtyValue >= qtyMin && qtyValue <= qtyMax) && (qtyValue - 1 >= qtyMin && qtyValue - 1 <= qtyMax)){
        qtyValue = qtyValue - 1;
        productQuantity.setAttribute("value", qtyValue.toString());
    }
}


//add to cart button
function addCart(){
    let addButton = document.getElementById("addBtn");

    if (addButton.innerHTML === "<a>Add to Cart</a>"){
        addButton.innerHTML = "<a>Added</a>";
        addButton.classList.replace("btn--primary", "btn--accent-3");
    } else {
        addButton.innerHTML = "<a>Add to Cart</a>";
        addButton.classList.replace("btn--accent-3", "btn--primary");
    }
}


//SHOPPING CART script

//delete cart item
function deleteItem(id){
    let cartID = "cartItem" + id;
    document.getElementById(cartID).remove();
}



//CHECKOUT PAGE script
//apply discount button
function applyDiscount(){
    let applyButton = document.getElementById("applyBtn");

    if (applyButton.innerHTML === "<a>Apply</a>"){
        applyButton.innerHTML = "<a>Applied</a>";
        applyButton.classList.replace("btn--primary", "btn--accent-3");
    } else {
        applyButton.innerHTML = "<a>Apply</a>";
        applyButton.classList.replace("btn--accent-3", "btn--primary");
    }
}

function swapCard(){
    let deliveryOption = document.getElementById("shippingOpt");

    if (deliveryOption.style.display === "none"){
        deliveryOption.style.display = "flex";
    } else {
        deliveryOption.style.display = "none";
    }
}